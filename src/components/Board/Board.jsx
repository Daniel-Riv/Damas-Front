import React, { useState,useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./piece.css";

const Board = () => {
  const [pieces, setPieces] = React.useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const boardSize = 8;

  const formatBoard = (board) => {
    const flattenedBoard = board.flat();
    return flattenedBoard.map((piece) => {
      if (piece === '.') {
        return '---';
      }
      return piece === 'c' ? 'c1' : piece === 'b' ? 'b0' : piece;
    });
  };

  const fetchBoard = async () => {
    try {
      const response = await axios.get('http://localhost:8000/board');
      const formattedBoard = formatBoard(response.data);
      setPieces(formattedBoard);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchValidMoves = async (coord, position) => {
    try {
      const response = await axios.post("http://localhost:8000/valid_moves", {
        name: coord,
        position: position,
      });
      console.log("aaaaa",position)
      if (typeof response.data === 'string') {
        setMessage(response.data)
        setShowAlert(true);
        return [];
      }
      return response.data[0].map(move => move.join("")); // Return valid moves
      //return response.data[0] ? response.data[0].map(move => move.join("")) : []; // Return valid moves or empty array

    } catch (error) {
      console.error(error);
    }
  };

  const handleSurrender = async () => {
    try {
      const response = await axios.get('http://localhost:8000/rendir');
      console.log(response)
      if (typeof response.data[0] === 'string') {
        setMessage(response.data[0]);
        setShowAlert(true);
      }
      const fromatboard = formatBoard(response.data[1]);
      setPieces(fromatboard);
    } catch (error) {
      console.error(error);
    }
  };


  const handleMove = async (algebraicDestination) => {
    const numericDestination = algeNumericPositon(algebraicDestination);
    try {
      const response = await axios.post('http://localhost:8000/main', {
        name: selectedPiece,
        move: numericDestination,
        position: unformatBoard(pieces),
      });
      console.log("aaaa",response)
      if (typeof response.data === 'string') {
        setMessage(response.data);
        setShowAlert(true);
      } else {
        const formattedBoard = formatBoard(response.data);
        setPieces(formattedBoard);
        setSelectedPiece(null);
        setPossibleMoves([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBoard();
  }, []);

  useEffect(() => {
    if (message) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer); // Esto limpia el temporizador si el componente se desmonta.
    }
  }, [message]);


  const unformatBoard = (formattedBoard) => {
    const originalBoard = Array.from({ length: 8 }, () => Array(8).fill("."));
    formattedBoard.forEach((piece, index) => {
      const row = Math.floor(index / 8);
      const col = index % 8;
      if (piece === "---") {
        originalBoard[row][col] = ".";
      } else {
        originalBoard[row][col] = piece[0];
      }
    });
    return originalBoard;
  };

  const algeNumericPositon = (algebraicPosition) => {
    const letterToNumber = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
    };

    const col = letterToNumber[algebraicPosition[0]];
    const row = parseInt(algebraicPosition[1]);

    return `${row}${col}`;
  };

  const handlePieceClick = async (position) => {
    const numericPosition = algeNumericPositon(position);
    const clickedIndex = parseInt(numericPosition[0]) * 8 + parseInt(numericPosition[1]);
    const clickedPiece = pieces[clickedIndex];

    // Verificar si la casilla está vacía antes de leer el color de la pieza
    if (clickedPiece && clickedPiece !== '---') {
      const clickedPieceColor = clickedPiece[1];

      if (!selectedPiece) {
        setSelectedPiece(numericPosition);
        const table = unformatBoard(pieces);
        const newPossibleMoves = await fetchValidMoves(numericPosition, table);
        setPossibleMoves(newPossibleMoves);
      } else {
        const selectedIndex = parseInt(selectedPiece[0]) * 8 + parseInt(selectedPiece[1]);
        const selectedPieceColor = pieces[selectedIndex][1];

        if (selectedPieceColor === clickedPieceColor) {
          setSelectedPiece(numericPosition);
          const table = unformatBoard(pieces);
          const newPossibleMoves = await fetchValidMoves(numericPosition, table);
          setPossibleMoves(newPossibleMoves);
        } else {
          const { result: possibleMove } = isPossibleMove(position);
          if (possibleMove) {
            handleMove(position);
          }
        }
      }
    }
  };

  const isPossibleMove = (position) => {
    const numericPosition = algeNumericPositon(position);
    const result = possibleMoves && possibleMoves.some(move => move === numericPosition);
    return { result, numericPosition };
  };

  const renderSquare = (row, col) => {

    const position = `${String.fromCharCode(col + 97)}${row}`;
    const color = (row + col) % 2 === 0 ? 'white' : 'black';
    const index = (parseInt(position[1])) * 8 + (position.charCodeAt(0) - 97);
    const piece = pieces[index];
    if (!piece) return null;

    const pieceType = piece[0] === 'c' ? 'checker' : piece === '---' ? '' : 'checker';
    const pieceColor = piece[1] === '0' ? 'white' : 'black';

    const selected = position === selectedPiece;
    const { result: possibleMove } = isPossibleMove(position);

    const handleClick = () => {
      if (piece !== "---") {
        if (!selectedPiece || (pieces[selectedPiece] && pieces[selectedPiece][1] === pieceColor)) {
          handlePieceClick(position);
        } else if (possibleMove) {
          handleMove(position);
        }
      } else if (possibleMove) {
        handleMove(position);
      }
    };

    return (
      <div
        key={position}
        className={`square ${color} ${selected ? "selected" : ""} ${possibleMove ? "possible-move" : ""
          }`}
        style={{ gridArea: position }}
        onClick={handleClick}
      >
        {piece !== "---" && (
          <div className={`piece ${pieceType} ${pieceColor}`}></div>
        )}
      </div>
    );
  };

  const renderBoard = () => {
    const elements = [];

    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        elements.push(renderSquare(row, col));
      }
    }

    return <div className="board-container"> <div className="board">{elements}</div></div>;
  };


  return (
    <Container fluid style={{ height: "80vh" }}>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6}>
          {renderBoard()}
          <Button className="m-2" style={{ width: '85%', justifyContent: "center" }} onClick={handleSurrender} >Rendirse </Button>
        </Col>
      </Row>
      {showAlert && message && (
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Alert
              variant="primary"
              onClose={() => setShowAlert(false)}
              dismissible
              style={{
                textAlign: 'center',
                color: '#00008B',
                fontSize: '25px',
                fontFamily: "Courier New"
              }}
            >
              <p>{message}</p>
            </Alert>
          </Col>
        </Row>
      )}

    </Container>
  );

};

export default Board;
