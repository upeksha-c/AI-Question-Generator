import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap';

function App() {
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionNo, setQuestionNo] = useState(1);
  const [questionDifficulty, setQuestionDifficulty] = useState("Easy");
  const [guidance, setGuidance] = useState("");
  const [keyConcepts, setKeyConcepts] = useState("");
  const [doNotInclude, setDoNotInclude] = useState("");

  return (
    <div className="container-fluid p-0">

          <Card >
              <Card.Header className="bg-primary text-white">
                  <h4>📝 Generate Questions</h4>
              </Card.Header>
              <Card.Body>
                  <Form className="w-100 p-1">
                      {/* Question Topic */}
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold text-start">Topic of questions *</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={2} className="fs-6" 
                          value={questionTopic} 
                          onChange={e => setQuestionTopic(e.target.value)}
                          placeholder='Enter your question Topic here...'
                        />
                      </Form.Group>

                      {/* Answer Options */}
                      <Form.Group className="mb-3">
                          <Row>  
                              <Col md={6} xs={12}>
                                <Form.Label className="fw-bold">No of Questions required *</Form.Label>
                                <Form.Control 
                                  className='mb-2' 
                                  placeholder= {"Ex- 10"} 
                                  onChange= {e => setQuestionNo(e.target.value)}
                                  value= {questionNo}
                                />
                              </Col>

                              <Col md={6} xs={12}>
                                <Form.Label className="fw-bold">Difficulty *</Form.Label>
                                <Form.Select  
                                  value={questionDifficulty} 
                                  onChange={e => setQuestionDifficulty(e.target.value)}
                                >
                                  <option value="Easy">Easy</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Hard">Hard</option>
                                </Form.Select>
                              </Col>                      
                          </Row>
                      </Form.Group>

                      {/* Description about topic */}
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Guidance for question creation *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2} className="fs-6" 
                          value={guidance} 
                          onChange={e => setGuidance(e.target.value)}
                          placeholder='Describe here about your topic'
                        />
                      </Form.Group>

                      {/* Extra Guidance */}
                      <Form.Group className="mb-3">
                          <Row>  
                              <Col md={6} xs={12}>
                                <Form.Label className="fw-bold">Key Concepts</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={2} className="fs-6" 
                                  value={keyConcepts} 
                                  onChange={e => setKeyConcepts(e.target.value)}
                                  placeholder='E.g.- If you want to focus on some key concepts, list them here...'
                                />
                              </Col>

                              <Col md={6} xs={12}>
                                <Form.Label className="fw-bold">Do not include</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={2} className="fs-6" 
                                  value={doNotInclude} 
                                  onChange={e => setDoNotInclude(e.target.value)}
                                  placeholder='E.g.- If there are specific things you want to avoid, list them here...'
                                />
                              </Col>                      
                          </Row>
                      </Form.Group>

                      {/* Submit Button */}
                      <div className="d-flex justify-content-end" >
                          <Button variant="primary" >
                              ➕ Generate Questions
                          </Button>
                      </div>          
                  </Form>
              </Card.Body>
          </Card>
        
    </div>
  )
}

export default App
