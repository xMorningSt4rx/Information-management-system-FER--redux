import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useEffect } from "react";

import {
  Container,
  TextInput,
  Textarea,
  Icon,
  Select,
  Button,
} from "react-materialize";
export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container className="contact-container">
        <h3>Contact Us</h3>
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <TextInput
              name="name"
              label="Your Name"
              icon={<Icon>star_border</Icon>}
            ></TextInput>

            <TextInput
              name="phone"
              icon={<Icon>local_phone</Icon>}
              label="Your Phone"
            ></TextInput>

            <Select
              id="Select-89"
              multiple
              options={{
                classes: "",
                dropdownOptions: {
                  alignment: "left",
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  coverTrigger: true,
                  hover: false,
                  inDuration: 150,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 250,
                },
              }}
              value={[""]}
            >
              <option disabled value="">
                Choose your Nation
              </option>
              <option value="1">VietNam</option>
              <option value="2">Japan </option>
              <option value="3">Other</option>
            </Select>

            <Textarea
              icon={<Icon>mode_edit</Icon>}
              name="message"
              label="Your Content"
            ></Textarea>
            <Button
              large
              node="button"
              waves="light"
              className=" pink lighten-2"
            >
              Submit
              <Icon right>send</Icon>
              
            </Button>
            

            
            
          </form>
        </div>
        
      </Container>
    </>

    // <Container>
    //   <h3>Contact us</h3>{" "}
    //   <form onSubmit={handleSubmit}>
    //     <TextInput id="TextInput-38" label="Your Name" />{" "}
    //     <TextInput id="TextInput-39" label="Your Phone" />{" "}
    //     <TextInput email id="TextInput-41" label="Email" validate />{" "}
    //     <Select
    //       id="Select-46"
    //       multiple={false}
    //       onChange={function noRefCheck() {}}
    //       value=""
    //     >
    //       {" "}
    //       <option disabled value="">
    //         Choose your favourite nation{" "}
    //       </option>{" "}
    //       <option value="1">England </option> <option value="2">France </option>{" "}
    //       <option value="3">Spain </option>{" "}
    //     </Select>{" "}
    //     <Textarea
    //       icon={<Icon>mode_edit</Icon>}
    //       id="Textarea-28"
    //       label="Your content"
    //     />
    //     <Button>Submit</Button>{" "}
    //   </form>{" "}
    // </Container>
    // ----------------------------------------------------------------------------
    // <body
    //   className="contact-body"
    //   style={{
    //     backgroundColor: theme.backgroundColor,
    //     color: theme.color,
    //   }}
    // >
    //   <div class="contact-info">
    //     <div class="contact-card">
    //       <a href="tel:0764910943"><img src="assets\images\-1216105642094jeazr60ms.png" alt="" /></a>
    //       <p>+84 764910943</p>
    //     </div>

    //     <div class="contact-card">
    //     <a href="mailto:tritthse1621640@fpt.edu.vn"><img src="assets\images\2751.jpg" alt="" /></a>
    //       <p>tritthse1621640@fpt.edu.vn</p>
    //     </div>

    //     <div class="contact-card">
    //     <a href="https://www.facebook.com/"><img
    //         target="_blank"
    //         src="assets\images\Facebook_f_logo_(2019).svg.webp"
    //         alt=""
    //       /></a>
    //       <p>FaceBookInfo</p>
    //     </div>
    //   </div>
    // </body>
  );
}
