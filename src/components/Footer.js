import React, { Component } from "react";
import { Footer, Button, Icon } from "react-materialize";
export default class Footerr extends Component {
  render() {
    return (
      // <div className='footer'>
      //     copyright &copy; 2022
      // </div>
      <Footer className="example" copyrights="copyright &copy; 2022">
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
        <Button className="red" fab floating large node="button">
          <Button
            className="red"
            floating
            icon={<Icon>insert_chart</Icon>}
            node="button"
          />
          <Button
            className="yellow darken-1"
            floating
            icon={<Icon>format_quote</Icon>}
            node="button"
          />
          <Button
            className="green"
            floating
            icon={<Icon>publish</Icon>}
            node="button"
          />
          <Button
            className="blue"
            floating
            icon={<Icon>attach_file</Icon>}
            node="button"
          />
        </Button>
      </Footer>
    );
  }
}
