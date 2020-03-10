import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>
              Erro
              <i
                className="fas fa-exclamation-triangle"
                style={{ color: "#CF142B" }}
              ></i>
            </h1>
            <h2>Página não encontrada</h2>
            <h3>
              A URL exigida{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              não foi encontrada
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
