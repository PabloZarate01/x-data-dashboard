import React from "react";
import WrapperContainer from "@components/WrapperContainer";
import ContentContainer from "@components/ContentContainer";

const SignInPage = () => {
    return (
        <WrapperContainer>
            <ContentContainer>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold">Sign In</h1>
                </div>
            </ContentContainer>
        </WrapperContainer>
    );
};

export default SignInPage;