// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import * as rtl from '@testing-library/react';
// import preloadAll from 'jest-next-dynamic';

// import { Navbar, NavbarAlt, } from './index.stories';

// let tools;

// beforeEach(() => rtl.cleanup());

// describe('NavBar Test Suite', () => {
//   it('renders NavBar correctly', async () => {
//     await preloadAll();
//     tools = await rtl.render(<Navbar />);

//     const Create = await rtl.waitForElement(() => tools.findByText(/create event/i));
//     const Login = await rtl.waitForElement(() => tools.findByText(/sign in/i));
//     const Signup = await rtl.waitForElement(() => tools.findByText(/sign up/i));

//     expect(Create).toBeInTheDocument();
//     expect(Login).toBeInTheDocument();
//     expect(Signup).toBeInTheDocument();
//   });
//   it('renders NavbarAlt correctly', async () => {
//     await preloadAll();
//     tools = await rtl.render(<NavbarAlt />);

//     const Create = await rtl.waitForElement(() => tools.findByText(/create event/i));
//     const Login = await rtl.waitForElement(() => tools.findByText(/sign in/i));
//     const Signup = await rtl.waitForElement(() => tools.findByText(/sign up/i));

//     expect(Create).toBeInTheDocument();
//     expect(Login).toBeInTheDocument();
//     expect(Signup).toBeInTheDocument();
//   });
// });
