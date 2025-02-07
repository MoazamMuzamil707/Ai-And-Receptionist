"use client"

import NoAuthPagesLayout from '@/components/layouts/noAuth';
import SignUpContainer from '../../containers/SignUpContainer'

const SignUp = () => {
    return (
        <div>
            <NoAuthPagesLayout>
                <SignUpContainer />
            </NoAuthPagesLayout>
        </div>
    )
}

export default SignUp;