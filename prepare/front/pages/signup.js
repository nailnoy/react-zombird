import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import { useCallback, useState } from "react";

import AppLayout from "../components/AppLayout";

TextInput.propTypes = {
    value: PropTypes.string,
  };



const Signup = () => {
    const [id, setId] = useState('');
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const [password, setPassword] = useState('');
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const [nickname, setNickname] = useState('');
    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
          }
        if (!term) {
            return setTermError(true);
          }
        }, [password, passwordCheck, term]);

    return (
        <AppLayout>
             <Head>
                <title>회원가입 | ZoMbird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nickname} onChange={onChangeNickname} required />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                        required
                    />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                </div>

            </Form>
         </AppLayout>
    );
};

export default Signup;