import { useContext } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center items-center mx-10 my-10'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;