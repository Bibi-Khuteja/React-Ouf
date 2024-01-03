import { React, useState, useRef } from "react";
import "./index.scss";
import {
  Form,
  Card,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  Button,
  FormControl,
  Modal,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
// circularprogress
import CircularProgressFaceBook from "./CircularProgressFaceBook";
import CircularProgressGoogle from "./CircularProgressGoogle";

// data file
// import axios from "axios";
import { useApi } from "../../ContextApi/ContextApi";
// import DataDemo from "./apiData.json";
import { Images } from "../../assets/images/images";

const MainScreen = () => {
  const { fetchData, DataDemo } = useApi();
  // for select platform
  const [googleSelected, setGoogleSelected] = useState(false);
  const [facebookSelected, setFacebookSelected] = useState(false);

  const handleGoogleChange = () => {
    setGoogleSelected(!googleSelected);
    if (facebookSelected) {
      setFacebookSelected(false);
    }
  };

  const handleFacebookChange = () => {
    setFacebookSelected(!facebookSelected);
    if (googleSelected) {
      setGoogleSelected(false);
    }
  };

  // this useState is for first radio buttons
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption1(e.target.value);
  };

  // this useState is for 2 radio buttons budget
  const [selectedOption2, setSelectedOption2] = useState(""); // State to track selected radio

  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  // date picker function
  const [selectedDate, setSelectedDate] = useState(null);
  const [endSelectedDate, setEndSelecteddate] = useState(null);
  // const [showDatePicker, setShowDatePicker] = useState(false);

  // const handleIconClick = () => {
  //   setShowDatePicker(!showDatePicker);
  // };

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  //   setShowDatePicker(false); // Close the date picker when date is selected
  // };
  const datePickerRef = useRef(null);
  const datePickerRef1 = useRef(null);

  const openDatePicker = () => {
    if (datePickerRef && datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const openDate = () => {
    if (datePickerRef1 && datePickerRef1.current) {
      datePickerRef1.current.setOpen(true);
    }
  };

  // dropdown
  const [selectedValue, setSelectedValue] = useState(""); // State to hold selected value
  const [selectedValueAge, setSelectedValueAge] = useState("");

  const [selectedValueGender, setSelectedValueGender] = useState("");

  const handleDropdownSelect = (value) => {
    setSelectedValue(value); // Update selected value when dropdown item is selected
  };

  const handleDropdownAge = (value) => {
    setSelectedValueAge(value);
  };

  const handleDropdownGender = (value) => {
    setSelectedValueGender(value);
  };

  // validation
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({}); // State to store form data

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      // Handle invalid form data if needed
      return;
    }

    if (!selectedDate || !endSelectedDate) {
      event.stopPropagation();
      setValidated(false);
      handleShow(); // Show modal or error message here
      return;
    }

    try {
      setValidated(true); // Reset the validation state
      // Your form submission logic goes here if needed

      // Call the fetchData function after form submission
      const result = await fetchData();

      // Set formSubmitted to true after successful form submission
      setFormSubmitted(true);

      // Set the received data to state
      setFormData(result); // Update formData with the received data
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error condition if needed
    }
  };

  // API URL to fetch data (replace with your actual API endpoint)
  // const API_URL = "http://localhost:3002/data";
  // const [DataDemo, setDataDemo] = useState(" ");
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(API_URL);
  //     setDataDemo(response.data); // Set the fetched data to the state
  //     console.log("dataDemo======>",response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     // Handle errors here
  //   }
  // };
  // useEffect(() => {
  //   fetchData(); // Call the async function to fetch data when the component mounts
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="main-section p-4">
      <>
        <Row>
          <Col lg={8} md={12} sm={12} className="mt-3 column1">
            <Card className="big-card">
              <Card.Body>
                <Form noValidate>
                  {/* check box div */}
                  <div className="checkDiv">
                    <p className="title">
                      Select the platform you want to pull the result from
                    </p>
                    <Form.Check
                      required
                      type="checkbox"
                      label="Google"
                      className="checkMe mb-2"
                      checked={googleSelected}
                      onChange={handleGoogleChange}
                    />
                    <Form.Check
                      required
                      type="checkbox"
                      label="Facebook"
                      className="checkMe"
                      checked={facebookSelected}
                      onChange={handleFacebookChange}
                    />
                  </div>
                  {/* radio div */}
                  <div className="my-4 radiDiv">
                    <p className="title">Which Property you want to Monetize</p>
                    <Row>
                      <Col lg={4} md={4} sm={4}>
                        <Form.Check
                          required
                          type="radio"
                          label="Website Visit"
                          name="radioGroup"
                          id="option1"
                          value="option1"
                          checked={selectedOption1 === "option1"}
                          onChange={handleOptionChange}
                          className="radioMe mb-2"
                        />

                        <Form.Check
                          required
                          type="radio"
                          label="App Install"
                          name="radioGroup"
                          id="option2"
                          value="option2"
                          checked={selectedOption1 === "option2"}
                          onChange={handleOptionChange}
                          className="radioMe mb-2"
                        />
                      </Col>
                      <Col lg={4} md={4} sm={4}>
                        <Form.Check
                          required
                          type="radio"
                          label="Store Walkins"
                          name="radioGroup"
                          id="option3"
                          value="option3"
                          checked={selectedOption1 === "option3"}
                          onChange={handleOptionChange}
                          className="radioMe mb-2"
                        />

                        <Form.Check
                          required
                          type="radio"
                          label="Watch the Banner"
                          name="radioGroup"
                          id="option4"
                          value="option4"
                          checked={selectedOption1 === "option4"}
                          onChange={handleOptionChange}
                          className="radioMe mb-2"
                        />
                      </Col>
                    </Row>
                  </div>
                  {/* budget */}
                  <div className="radiDiv">
                    <p className="title">Budget</p>
                    <Row>
                      <Col lg={5} className="mb-3">
                        <div className="d-flex">
                          <div>
                            <Form.Check
                              required={selectedOption2 === "budget1"} // Set required based on selection
                              type="radio"
                              label="Daily"
                              name="radioGroup1"
                              id="budget1"
                              value="budget1"
                              checked={selectedOption2 === "budget1"}
                              onChange={handleOptionChange2}
                              className="radioMe mb-2 mr-2 mt-2"
                            />
                          </div>
                          <div className="ml-2 d-flex">
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                Rs
                              </InputGroup.Text>
                              <Form.Control
                                required={selectedOption2 === "budget1"} // Set required based on selection
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <p className="small-text">
                          Your Daily spend would be- Rs 1,000
                        </p>
                      </Col>
                      <Col lg={5}>
                        <div className="d-flex">
                          <div>
                            <Form.Check
                              required={selectedOption2 === "budget2"} // Set required based on selection
                              type="radio"
                              label="Lifetime"
                              name="radioGroup1"
                              id="budget2"
                              value="budget2"
                              checked={selectedOption2 === "budget2"}
                              onChange={handleOptionChange2}
                              className="radioMe mb-2 mr-2 mt-2"
                            />
                          </div>
                          <div className="ml-2 d-flex">
                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon2">
                                Rs
                              </InputGroup.Text>
                              <Form.Control
                                required={selectedOption2 === "budget2"} // Set required based on selection
                                aria-label="Username"
                                aria-describedby="basic-addon2"
                              />
                            </InputGroup>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  {/* date section */}
                  <div className="my-4 dateDiv">
                    <Row>
                      <Col lg={6} md={6} className="mb-2">
                        <div className="d-flex align-items-center">
                          <div className="start-text mr-3">Start Date</div>
                          <div className="custom-date-picker">
                            <DatePicker
                              required
                              ref={datePickerRef}
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              className="form-control pr-0"
                              // Hide the calendar when the date is selected
                              onClickOutside={() =>
                                datePickerRef.current.setOpen(false)
                              }
                            />
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="calendar-icon"
                              style={{ color: "#0070C0", cursor: "pointer" }}
                              onClick={openDatePicker}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6}>
                        <div className="d-flex align-items-center">
                          <div className="start-text mr-3">End Date</div>

                          <div className="custom-date-picker ml-2">
                            <DatePicker
                              required
                              ref={datePickerRef1}
                              selected={endSelectedDate}
                              onChange={(date) => setEndSelecteddate(date)}
                              className="form-control pr-0"
                              // Hide the calendar when the date is selected
                              onClickOutside={() =>
                                datePickerRef1.current.setOpen(false)
                              }
                            />
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="calendar-icon"
                              style={{ color: "#0070C0", cursor: "pointer" }}
                              onClick={openDate}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  {/* audience section */}
                  <div className="my-4 audienceDiv">
                    <p className="title">Create your Audience</p>
                    <Row>
                      {/* location */}
                      <Col xl={4} lg={6} md={6} sm={12} className="my-2">
                        <div className="d-flex align-items-baseline">
                          <p className="loc-text mr-2 ">Location</p>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Birmingham"
                            className="w-100 input-group"
                            style={{ height: "40px" }}
                          />
                        </div>
                      </Col>
                      {/* radius */}
                      <Col xl={3} lg={6} md={6} sm={12} className="my-2">
                        <div className="d-flex align-items-baseline">
                          <p className="mr-2 loc-text">+</p>
                          <p className="mr-2 loc-text">Radius</p>
                          <InputGroup className="mb-3  radiusInputGroup">
                            <Form.Control
                              required
                              placeholder="20km"
                              aria-label="Username"
                              className="input-field"
                              aria-describedby="basic-addon1"
                              value={selectedValue}
                              onChange={() => {}} 
                              onKeyDown={(e) => e.preventDefault()} 
                              onFocus={(e) => e.target.blur()} 
                              readOnly
                            />

                            <DropdownButton
                              variant="outline-secondary"
                              style={{ width: "32px" }}
                              id="input-group-dropdown-2"
                              align="end"
                              className="dropdownButton"
                              onSelect={(eventKey) =>
                                handleDropdownSelect(eventKey)
                              }
                            >
                              <Dropdown.Item eventKey="20km">
                                20km
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="30km">
                                30km
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="40km">
                                40km
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="50km">
                                50km
                              </Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>
                      </Col>
                      {/* age */}
                      <Col xl={2} lg={6} md={6} sm={12} className=" my-2 pr-0">
                        <div className="d-flex align-items-baseline ageDiv">
                          <p className="mr-2 loc-text">Age</p>
                          <InputGroup className="mb-3 ageInputGroup">
                            <Form.Control
                              required
                              placeholder="18-20"
                              aria-label="Username"
                              className="input-field"
                              aria-describedby="basic-addon1"
                              value={selectedValueAge}
                              onChange={() => {}} 
                              onKeyDown={(e) => e.preventDefault()} 
                              onFocus={(e) => e.target.blur()} 
                              readOnly
                            />
                            <DropdownButton
                              variant="outline-secondary"
                              style={{ width: "32px" }}
                              id="input-group-dropdown-2"
                              align="end"
                              className="dropdownButton"
                              onSelect={(eventKey) =>
                                handleDropdownAge(eventKey)
                              }
                            >
                              <Dropdown.Item eventKey="18-25">
                                18-25yrs
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="26-35">
                                26-35yrs
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="36-60">
                                36-60yrs
                              </Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>
                      </Col>
                      {/* gender */}
                      <Col xl={3} lg={6} md={6} sm={12} className="my-2">
                        <div className="d-flex align-items-baseline genderDiv ">
                          <p className="mr-2 loc-text">Gender</p>
                          <InputGroup className="mb-3 genderInputGroup">
                            <Form.Control
                              required
                              placeholder="male"
                              aria-label="Username"
                              className="input-field"
                              aria-describedby="basic-addon1"
                              value={selectedValueGender} // Bind input field value to the selected value
                              onChange={() => {}} 
                              onKeyDown={(e) => e.preventDefault()} 
                              onFocus={(e) => e.target.blur()} 
                              readOnly
                            />
                            <DropdownButton
                              variant="outline-secondary"
                              style={{ width: "32px" }}
                              id="input-group-dropdown-2"
                              align="end"
                              className="dropdownButton"
                              onSelect={(eventKey) =>
                                handleDropdownGender(eventKey)
                              }
                            >
                              <Dropdown.Item eventKey="male">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="female">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="others">
                                Others
                              </Dropdown.Item>
                            </DropdownButton>
                          </InputGroup>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  {/* map */}
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.27832784204!2d-2.0284402367071586!3d52.49744370063333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sin!4v1702985706715!5m2!1sen!2sin"
                      style={{ width: "100%", height: "153px", border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  {/* last */}
                  <div>
                    <div className="d-flex align-items-baseline my-2">
                      <p className="demo mr-2 ">Demographics</p>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Add Interest, Behavior, Demographics"
                        className="w-50 demo-input "
                        style={{ height: "40px" }}
                      />
                    </div>
                  </div>
                  <div className="text-right ">
                    <Button
                      className="demo-button py-3 px-4"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      submit
                    </Button>
                  </div>
                </Form>
                {/* Modal or error message to display when form is submitted without proper data */}
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Error!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Please fill in all required fields.</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12} sm={12} className="mt-3 column2">
            <Card className="smallCard">
              {formSubmitted && (
                <Card.Body>
                  {DataDemo && (
                    <>
                      <p className="title">
                        {DataDemo?.audienceDefinition?.title}
                      </p>
                      <p className="para">
                        {DataDemo?.audienceDefinition?.para}
                      </p>
                      {/* after para card */}
                      <Card.Body className="small card w-100  mt-2" style={{}}>
                        <Row>
                          <Col lg={6} md={6} sm={12} className="text-center ">
                            <p className="title">Google</p>
                            {/* <p>{DataDemo.estimatedRanges.google}</p> */}
                            <CircularProgressGoogle />
                          </Col>
                          <Col lg={6} md={6} sm={12} className="text-center">
                            <p className="title ">Facebook</p>
                            <CircularProgressFaceBook />
                          </Col>
                        </Row>
                      </Card.Body>
                      {/* next */}
                      <div>
                        <p className="para my-4">
                          The Estimated Population reach across platform is
                        </p>
                        {/* <p>Total: {DataDemo.platformData.facebook.total}</p>
            <p>Estimated: {DataDemo.platformData.facebook.estimated}</p> */}

                        <Card.Body className="small card w-100 my-2">
                          {/* google */}
                          <Row className="mb-3">
                            <Col lg={4} md={4} sm={12}>
                              <p className="para">Google</p>
                            </Col>
                            <Col lg={8} md={8} sm={12}>
                              <div className="d-flex align-items-baseline">
                                <FormControl
                                  className="number p-0"
                                  placeholder={
                                    DataDemo?.platformData?.google?.estimated
                                  }
                                />
                                <div>
                                  <img
                                    src={Images.ArrowRight}
                                    className="mb-3 mt-2 mx-2"
                                  />
                                </div>

                                <FormControl
                                  className="number p-0"
                                  placeholder={
                                    DataDemo?.platformData?.google?.total
                                  }
                                />
                              </div>
                            </Col>
                          </Row>
                          {/* facebook */}
                          <Row>
                            <Col lg={4} md={4} sm={12}>
                              <p className="para">Facebook</p>
                            </Col>
                            <Col lg={8} md={8} sm={12}>
                              <div className="d-flex align-items-baseline">
                                <FormControl
                                  className="number p-0"
                                  placeholder={
                                    DataDemo?.platformData?.facebook?.estimated
                                  }
                                />
                                <div>
                                  <img
                                    src={Images.ArrowRight}
                                    className="mb-3 mt-2 mx-2"
                                  />
                                </div>

                                <FormControl
                                  className="number p-0"
                                  placeholder={
                                    DataDemo?.platformData?.facebook?.total
                                  }
                                />
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </div>
                      {/* next estimate percentage*/}
                      <div className="d-flex">
                        <p className="estimate-title mt-3 mb-5 mr-4 ">
                          Estimated Click % -{" "}
                        </p>
                        <p className="estimate-title mt-3 mb-5 ">
                          {DataDemo?.click?.clickData}
                        </p>
                      </div>
                      {/* next section ROI */}
                      <p className="para my-3">Estimated ROI</p>
                      <Card.Body className="small card w-100 mt-2">
                        <div>
                          <Row>
                            <Col
                              lg={3}
                              md={3}
                              xs={3}
                              sm={3}
                              className="p-0"
                            ></Col>
                            <Col
                              lg={3}
                              md={3}
                              sm={3}
                              xs={3}
                              className="pt-0 pr-1 pb-0 pl-0"
                            >
                              <p className="reach "> Daily Reach</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3} className="p-0">
                              <p className="reach "> Monthly Reach</p>
                            </Col>
                            <Col lg={3} md={3} sm={3} xs={3}>
                              <p className="reach ">CPC</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p className="reach">Goolge</p>
                            </Col>
                            <Col className="pl-0">
                              <p className="ReachNum">
                                {DataDemo?.ROI?.Google?.DailyReach}
                              </p>
                            </Col>
                            <Col className="pl-0">
                              <p className="ReachNum">
                                {DataDemo?.ROI?.Google?.MonthlyReach}
                              </p>
                            </Col>
                            <Col>
                              <p className="ReachNum">
                                {DataDemo?.ROI?.Google?.CPC}
                              </p>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                              <p className="reach">Facebook</p>
                            </Col>
                            <Col className="pl-0">
                              <p className="ReachNum">
                                {DataDemo?.ROI?.Facebook?.DailyReach}
                              </p>
                            </Col>
                            <Col className="pl-0">
                              <p className="ReachNum">
                                {DataDemo?.ROI?.Facebook?.MonthlyReach}
                              </p>
                            </Col>
                            <Col>
                              <p className="ReachNum">
                                {DataDemo?.ROI?.Facebook?.CPC}
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </>
                  )}
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default MainScreen;
