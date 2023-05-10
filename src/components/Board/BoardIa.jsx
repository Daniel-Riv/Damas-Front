import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./piece.css";
const BoardIa = () => {
    const [pieces, setPieces] = React.useState([]);
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

    const makeAIMove = async () => {
        try {
            const response = await axios.post('http://localhost:8000/machine', {
                position : unformatBoard(pieces)
            });
            console.log(response)
            if (typeof response.data === 'string') {
                setMessage(response.data);
                setShowAlert(true);
            } else {
                const formattedBoard = formatBoard(response.data);
                setPieces(formattedBoard);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Realiza un movimiento de la IA cada vez que se actualiza el tablero.
        if (pieces.length > 0) {
            makeAIMove();
        }
    }, [pieces]);

    useEffect(() => {
        fetchBoard();
    }, []);

    const renderSquare = (row, col) => {
        const position = `${String.fromCharCode(col + 97)}${row}`;
        const color = (row + col) % 2 === 0 ? 'white' : 'black';
        const index = (parseInt(position[1])) * 8 + (position.charCodeAt(0) - 97);
        const piece = pieces[index];
        if (!piece) return null;

        const pieceType = piece[0] === 'c' ? 'checker' : piece === '---' ? '' : 'checker';
        const pieceColor = piece[1] === '0' ? 'white' : 'black';

        return (
            <div
                key={position}
                className={`square ${color}`}
                style={{ gridArea: position }}
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

        return <div className="board-container">
            <div className="board">{elements}</div>
        </div>;
    };

    return (
        <Container fluid style={{ height: "80vh" }}>
            <Row className="d-flex justify-content-center align-items-center h-100">
                <Col xs={12} md={8} lg={6}>
                    {renderBoard()}
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

export default BoardIa;

