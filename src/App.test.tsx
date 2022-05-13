import React, { ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react';
import App, { AppContext } from './App';
import {initContextData} from "./App";
import Questions, { TOTAL_QUESTIONS } from './pages/Questions';
import InputDetailsForm from './pages/InputDetailsForm';
import { Radio } from '@mui/material';
import Results from './pages/Results';
import { Router, Routes } from 'react-router-dom';
import Chart from './components/Chart';
import RadioButtons from './components/buttons/RadioButtons';
import AuthLayout from './components/AuthLayout';
import CheckboxOptions from './components/CheckboxOptions';
import RadioOptions from './components/RadioOptions';



const initdata={ answers: {} };

describe("unit testing basics", () => {  
  test("verifying initdata", () => {
    expect(initContextData).toStrictEqual(initdata);
  });
});

describe("unit testing basics", () => {  
  test("verifying number of questions", () => {
    expect(TOTAL_QUESTIONS).toStrictEqual(4);
  });
});

describe("test Item component", () => {
  test("render item component", () => {
    const appData={answers:{1:{type:"Radio",value:["Every 15 days"]},},};
    render(<AppContext.Provider value={[appData]}>
      <Results/>
    </AppContext.Provider>);
    const title=screen.getByText("QUIZ - RESULT")
    expect(title).toBeInTheDocument();
  });
});

describe("test Item component", () => {
  test("render item component", () => {
      <Chart data={[{name:"CorrectAns",value:1},{name:"WrongAns",value:2}]}/>
  });
});

describe("test Item component", () => {
  test("render item component", () => {
      <RadioButtons label={''} buttons={[]}/>
  });
});

describe("test Item component", () => {
  test("render item component", () => {
    const appData={answers:{1:{type:"Radio",value:["Every 15 days"]},},};
    render(<AppContext.Provider value={[appData]}>
      <AuthLayout/>
    </AppContext.Provider>);
  });
});

describe("test Item component", () => {
  test("render item component", () => {
    const fnt=jest.fn();
    render(
      <CheckboxOptions options={[]} handleChange={fnt}/>);
  });
});

describe("test Item component", () => {
  test("render item component", () => {
    const fnt=jest.fn();
    render(
      <RadioOptions options={["Every 15 days"]} value={'true'} handleChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      } }/>
      );
      screen.debug()
      const title=screen.getByText("Every 15 days")
      expect(title).toBeInTheDocument();
  });
});



test("snapshot testing", () => {
  const fnt=jest.fn();
  const { container } = render(<CheckboxOptions options={[]} handleChange={fnt} />);
  expect(container.firstChild).toMatchSnapshot();
});