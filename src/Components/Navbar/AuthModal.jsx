import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
`;

const AuthModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px 40px;
  width: 350px;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform: translateY(-30px);
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 2px solid #f1f1f1;
`;

const Tab = styled.button`
  flex: 1;
  padding: 12px 0;
  text-align: center;
  font-weight: 600;
  background-color: #f9f9f9;
  border: none;
  cursor: pointer;
  border-radius: 6px 6px 0 0;
  transition: background-color 0.3s ease;
  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 27px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  transition: border 0.3s ease;
  &:focus {
    border-color: #007bff;
  }
  &.error {
    border-color: red;
  }
  &.shake {
    animation: ${shake} 0.5s ease;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 0;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #555;
  span {
    color: #007bff;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: #0056b3;
    }
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c82333;
  }
`;

const AuthModal = ({ onClose, setUser }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [isSignUp, setIsSignUp] = useState(false); 
  const [error, setError] = useState({ username: false, email: false, password: false });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  
  const validateFields = () => {
    const newError = { username: false, email: false, password: false };
    let valid = true;

    
    if (!formData.username) {
      newError.username = true;
      valid = false;
    }
    if (!formData.password) {
      newError.password = true;
      valid = false;
    }
    if (isSignUp && !formData.email) {
      newError.email = true;
      valid = false;
    }

    setError(newError); 
  };

  const handleSignUp = () => {
    if (!validateFields()) {
      toast.warn('Please fill the required fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user) => user.email === formData.email)) {
      toast.error('Email already exists!');
      return;
    }
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    toast.success('Sign up successful!');
    setIsSignUp(false); 
  };

  const handleSignIn = () => {
    if (!validateFields()) {
      toast.warn('Please fill the required fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );
    if (user) {
      localStorage.setItem('currentUser', formData.username);
      setUser(formData.username); 
      toast.success('Sign in successful!');
      onClose();
    } else {
      toast.error('Invalid credentials!');
    }
  };

  return (
    <AuthModalWrapper>
      <ModalContent>
        
        <Tabs>
          <Tab
            className={!isSignUp ? 'active' : ''}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </Tab>
          <Tab
            className={isSignUp ? 'active' : ''}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </Tab>
        </Tabs>

        {/* Input Fields */}
        <FormContainer>
          <Heading>{isSignUp ? 'Create Your Account' : 'Welcome Back!'}</Heading>
          <InputGroup>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`${error.username ? 'error' : ''} ${error.username ? 'shake' : ''}`}
            />
          </InputGroup>

          {isSignUp && (
            <InputGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`${error.email ? 'error' : ''} ${error.email ? 'shake' : ''}`}
              />
            </InputGroup>
          )}

          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`${error.password ? 'error' : ''} ${error.password ? 'shake' : ''}`}
            />
          </InputGroup>

          {isSignUp ? (
            <SubmitButton onClick={handleSignUp}>Sign Up</SubmitButton>
          ) : (
            <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
          )}

          <ToggleText>
            {isSignUp ? (
              <span onClick={() => setIsSignUp(false)}>Already have an account? Sign In</span>
            ) : (
              <span onClick={() => setIsSignUp(true)}>Don't have an account? Sign Up</span>
            )}
          </ToggleText>
        </FormContainer>

   
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </AuthModalWrapper>
  );
};

export default AuthModal;
