import { Card, Button } from "react-bootstrap"

function About() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/0f/36/17/0f361741bf7c35e0aa795ea76c750a75.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <a href="https://wa.me/+923022004480">contact me on whatsapp</a>
            </Card.Body>
        </Card>
    );
}

export default About;