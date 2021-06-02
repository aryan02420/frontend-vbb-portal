import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import { RightOutlined, LeftOutlined, CheckOutlined } from '@ant-design/icons';

import * as actions from '../../redux/actions';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ProgressBar from './ProgressBar';

const MasterForm = ({
  registerForNewsletter,
  subUserRegistration,
  processing,
  history,
}) => {
  let [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    if (currentStep === 1) {
      registerForNewsletter();
    }
    window.scrollTo(0, 0);
    currentStep = currentStep === 4 ? 4 : currentStep + 1;
    setCurrentStep(currentStep);
  };

  const back = () => {
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(currentStep);
  };

  const register = () => {
    subUserRegistration(history);
  };

  // const backButton = () => {
  //   if (currentStep === 2 || currentStep === 3) {
  //     return (
  //       <Button style={{ marginRight: '10px' }} type="button" onClick={back}>
  //         <LeftOutlined />
  //         Back
  //       </Button>
  //     );
  //   }
  //   return null;
  // };

  // const nextButton = () => {
  //   switch (currentStep) {
  //     case 1:
  //       return (
  //         <Button
  //           style={{ marginRight: '10px' }}
  //           type="button"
  //           disabled="true" //{processing.newsletterSignup}
  //           onClick={() => {
  //             //@todo: how do we handle previously submitted user?
  //             registerForNewsletter();
  //             next();
  //           }}
  //         >
  //           Next
  //           <RightOutlined />
  //         </Button>
  //       );

  //     case 2:
  //       return (
  //         <Button style={{ marginRight: '10px' }} type="button" onClick={next}>
  //           Next
  //           <RightOutlined />
  //         </Button>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  // const registerButton = () => {
  //
  //   return null;
  // };

  return (
    <div>
      {currentStep < 4 ? (
        <div style={{ margin: '0 0 25px 0' }}>
          <ProgressBar currentStep={currentStep} />
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <Step1
          currentStep={currentStep}
          nextOnClick={next}
          processing={processing}
        />
        <Step2
          currentStep={currentStep}
          backOnClick={back}
          nextOnClick={next}
        />
        <Step3
          currentStep={currentStep}
          backOnClick={back}
          registerOnClick={register}
          processing={processing}
        />
        <Step4 currentStep={currentStep} backOnClick={back} />
        {/* {backButton()}
        {nextButton()}
        {registerButton()} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.processing,
  };
};

export default withRouter(connect(mapStateToProps, actions)(MasterForm));
