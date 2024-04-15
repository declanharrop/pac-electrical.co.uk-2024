'use client';

import styled from 'styled-components';

export const QuoteFormStyles = styled.div`
  margin: 60px auto;
  max-width: 600px;
  padding: 0 10px;
  .hidden {
    display: none;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    margin-bottom: 20px;
    width: 100%;
  }
  .select-container {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  button {
    background-color: var(--navy);
    color: white;
  }
  textarea,
  select,
  input {
    padding: 10px;
    font-family: graphie, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.05rem;
    font-size: 1.6rem;
    border: solid 1px rgb(180, 180, 180, 1);
    border-radius: 5px;
    outline: none;
    width: 100%;
    font-weight: 500;
    color: var(--navy);
  }
  textarea {
    min-height: 140px;
  }
  input::placeholder {
    color: rgb(180, 180, 180, 1);
    font-weight: 400;
  }
  textarea::placeholder {
    color: rgb(180, 180, 180, 1);
    font-weight: 400;
  }
  input:focus {
    border: solid 1px var(--navy);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  select:focus {
    border: solid 1px var(--navy);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  textarea:focus {
    border: solid 1px var(--navy);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  input,
  select {
  }
`;
