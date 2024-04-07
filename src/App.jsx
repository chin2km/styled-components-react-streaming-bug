import React from 'react';
import styled from 'styled-components';

export const App = () => {
  return (
    <div>
      <div style={{ width: 230, height: 380 }}>
        <img
          height="100%"
          width="100%"
          decoding="async"
          loading="lazy"
          sizes="calc(100vw / 2)"
          srcSet="https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=160&width=120 120w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=294&width=220 220w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=480&width=360 360w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=534&width=400 400w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=800&width=600 600w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=1067&width=800 800w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=1280&width=960 960w"
          src="https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=480&width=360"
          alt="MUSTANG Schnürstiefelette in Braun: predná strana"
        />
      </div>

      <div style={{ width: 230, height: 380 }}>
        <img
          height="100%"
          width="100%"
          decoding="async"
          loading="lazy"
          sizes="calc(100vw / 2)"
          srcSet="https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=160&width=120 120w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=294&width=220 220w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=480&width=360 360w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=534&width=400 400w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=800&width=600 600w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=1067&width=800 800w, https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=1280&width=960 960w"
          src="https://cdn.aboutstatic.com/file/a5ae3089f2bc20212746be1bf3808775?bg=F4F4F5&quality=75&trim=1&height=480&width=360"
          alt="MUSTANG Schnürstiefelette in Braun: predná strana"
        />
      </div>

      <Wrapper as={StyledBox}>StyledBox StyledBox StyledBox StyledBox StyledBox</Wrapper>

      <Wrapper as={StyledButton}>StyledButton StyledButton StyledButton StyledButton StyledButton StyledButton</Wrapper>

      <Wrapper as={Box} style={{ background: 'pink' }}>
        Box Box Box Box Box Box Box Box Box Box
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  background-color: aqua;
  width: 380px;
  height: 380px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const Box = ({ className, ...rest }) => {
  return <StyledButton className={className} {...rest} data-testid="section-box" />;
};

const StyledBox = styled(Box)`
  display: flex;
  background-color: beige;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  color: black;
`;
