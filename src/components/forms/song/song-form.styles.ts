import styled from "styled-components";

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.625rem 2rem;
  box-shadow: 0 0 0.5rem rgba(229, 231, 235, 0.5); /* Tailwind's shadow-2xl shadow-gray-100 */
  border-radius: 0.375rem; /* Tailwind's rounded-md */
  border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #d946ef;
  padding: 0.5rem 1.5rem;
  border-radius: 0.125rem; /* Tailwind's rounded-sm */
  color: #f9fafb;
  align-self: flex-start;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #be185d;
  }
`;

export { Form, FormField, Label, Input, Button };
