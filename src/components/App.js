import React from "react";
import { InputGroup, InputGroupAddon, Button, Input, Container, Row, Col, Alert } from 'reactstrap';

// import css for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: '',
            passing: '',
            load: false,
            correct: false
        }
        this.onChange = this.onChange.bind(this);
        this.countCar = this.countCar.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onLoad() {
        this.setState({
            load: !this.state.load,
            correct: false
        })
    }
    countCar() {
        const cor = this.state.arr.match(/^([0-1],)+[0-1]$/);
        if (cor) {
            const arr = this.state.arr.split(',');
            let east = 0;
            let passing = 0;
            for (let i = 0; i < arr.length; i++) {
                arr[i] == 1 ?
                    passing += east : east++;
            }
            this.setState({
                passing: passing,
                load: true,
                correct: true,
            })
        } else {
            this.setState({
                load: true
            })
        }
    }
    render() {
        const str = `You should  count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P + < Q + < N, is passing when P is traveling to the east and Q is traveling to the west.`
        return (
            <Container>
                <Row>
                    <Col xs={6}>
                        <h1>Problem definition:</h1>
                        <p>
                            A non-empty array A consisting of N integers. Each elements of array A represent a cars on a road.</p>
                        <p> Array A contains only zero or one:
                    </p>
                        <ul>
                            <li>0 represents a car traveling east ( to the right on the X axis),</li>
                            <li>1 represents a car traveling west ( to the left  on the X axis),</li>
                        </ul>
                        <p>{str}</p>
                        <p>For example, consider array A = [0,1,0,1,1]  of 5 cars. We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).</p>
                    </Col>
                    <Col xs={6} style={{ alignSelf: 'center' }}>
                        {this.state.load === false ?
                            <InputGroup>
                                <Input name={'arr'} placeholder={'A array'} onChange={this.onChange} />
                                <InputGroupAddon addonType="append">
                                    <Button onClick={this.countCar} color="success">To the Right!</Button>
                                </InputGroupAddon>
                            </InputGroup>
                            :
                            <>
                                {this.state.correct ?
                                    <><Alert color="success">
                                        {`Passing car : ${this.state.passing}`}
                                    </Alert>
                                        <Button onClick={this.onLoad}>Try Again</Button>
                                    </>
                                    :
                                    <>
                                        <Alert color="danger">
                                            {`Error Enter only 0 or 1, separated by commas`}
                                        </Alert>
                                        <Button onClick={this.onLoad}>Try Again</Button>
                                    </>}
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default App;