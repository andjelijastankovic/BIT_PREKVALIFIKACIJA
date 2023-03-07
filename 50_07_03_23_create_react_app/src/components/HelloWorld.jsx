import { Component } from "react";

export class HelloWorld extends Component {
    render() {
        const text = 'Hello world';
        return <h1>{text}</h1>;
    }
}