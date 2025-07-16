"use client";
import { useState } from "react";

export default function QuestionModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [question, setQuestion] = useState("");

  return (
    <>
      <div className="ball" onClick={() => setModalOpen(true)} style={{ cursor: "pointer" }}>
        <span className="ball-q">?</span>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            <h2 className="modal-title">무엇이 궁금하십니까?</h2>
            <input
              className="modal-input"
              type="text"
              placeholder="궁금한 점을 입력하세요..."
              value={question}
              onChange={e => setQuestion(e.target.value)}
              autoFocus
            />
            <button className="modal-submit" onClick={() => setModalOpen(false)}>제출</button>
          </div>
        </div>
      )}
    </>
  );
} 