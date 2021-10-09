import React from 'react'
import { Row, Col, Container, Card, Button ,Image} from 'react-bootstrap';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


function facebookPost() {
    return (
        <div>
            <Container fluid>
                <Row className="py-5">
                    <Col md={4} sm={12}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={2}>
                                        <Image src="https://avatars.githubusercontent.com/u/50479258?v=4" width="50" className="rounded-circle"></Image>
                                    </Col>
                                    <Col md={10}>
                                        <span className="font-weight-bold">Usama Usman</span><br/>
                                        <span className="p-0">Today at 6:00</span>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <Button variant="text"><ThumbUpOutlinedIcon/>Like</Button>
                                    </Col>

                                    <Col>
                                    <Button variant="text"><ChatBubbleOutlineOutlinedIcon/>Comment</Button>
                                    </Col>

                                    <Col>
                                    <Button variant="text"><ShareOutlinedIcon/>Share</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={2}>
                                        <Image src="https://avatars.githubusercontent.com/u/50479258?v=4" width="50" className="rounded-circle"></Image>
                                    </Col>
                                    <Col md={10}>
                                        <span className="font-weight-bold">Usama Usman</span><br/>
                                        <span className="p-0">Today at 6:00</span>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <Button variant="text"><ThumbUpOutlinedIcon/>Like</Button>
                                    </Col>

                                    <Col>
                                    <Button variant="text"><ChatBubbleOutlineOutlinedIcon/>Comment</Button>
                                    </Col>

                                    <Col>
                                    <Button variant="text"><ShareOutlinedIcon/>Share</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} sm={12}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={2}>
                                        <Image src="https://avatars.githubusercontent.com/u/50479258?v=4" width="50" className="rounded-circle"></Image>
                                    </Col>
                                    <Col md={10}>
                                        <span className="font-weight-bold">Usama Usman</span><br/>
                                        <span className="p-0">Today at 6:00</span>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <Button variant="text"><ThumbUpOutlinedIcon/>Like</Button>
                                    </Col>

                                    <Col>
                                    <Button variant="text"><ChatBubbleOutlineOutlinedIcon/>Comment</Button>
                                    </Col>

                                    <Col>
                                    <Button variant="text"><ShareOutlinedIcon/>Share</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default facebookPost
