import { Link } from 'react-router-dom';
import dashboard from './dashboard.png'

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
// import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={dashboard} alt="image" />
        {/* <Logo /> */}
        DASHBOARD
    </ButtonBase>
);

export default LogoSection;
