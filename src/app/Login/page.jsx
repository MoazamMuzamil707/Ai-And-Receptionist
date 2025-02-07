"use client"
import NoAuthPagesLayout from '@/components/layouts/noAuth';
import LoginContainer from '../../containers/login'

const Login = () => {
    return (
        <div>
            <NoAuthPagesLayout>
                <LoginContainer />
            </NoAuthPagesLayout>
        </div>
    )
}

export default Login;