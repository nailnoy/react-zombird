import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

//redux가 중앙 저장소 역할을 하기 때문에 props로 값을 전달할 필요가 없다.
const AppLayout = ({ children }) => {
    // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    // 구조분해 할당
    const  { isLoggedIn } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>좀버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>                
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>  
                {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}> 
                    <a href='https://github.com/nailnoy' target="_blank" rel="noreferrer noopener">Made by ZoMD</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;