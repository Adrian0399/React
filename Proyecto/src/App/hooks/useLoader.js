import { useEffect, useState } from 'react'
import { endPoint } from '../../types';

export const useLoader = (initState=false) => {

    const LOADER_OFF = import.meta.env.VITE_LOADER_OFF;

    const [showLoaderState, setshowLoaderState] = useState(initState);
    const [fullDashboard, setfullDashboard] = useState({
        isReadyBalance: false,
        isReadyInfobak: false,
        isReadyMovements: false,
    });
    

    const onShowLoader = (valBol = false) => {
        setshowLoaderState(valBol);
    }


    const onFullDashboardLoad = (api,status=true) => {

        if(endPoint.balance == api){
            setfullDashboard({
                ...fullDashboard,
                isReadyBalance:!status,
            })
        }

        if(endPoint.infobak == api){
            setfullDashboard({
                ...fullDashboard,
                isReadyInfobak:!status,
            })
        }

        if(endPoint.movements == api){
            setfullDashboard({
                ...fullDashboard,
                isReadyMovements:!status,
            })
        }
    }


    if( true == showLoaderState &&
        true ==fullDashboard.isReadyBalance &&
        true ==fullDashboard.isReadyInfobak &&
        true ==fullDashboard.isReadyMovements){
            setshowLoaderState(false)
    }

    useEffect(() => {
        if(showLoaderState){
            const timer = setTimeout(() => {
                setshowLoaderState(false)
            }, parseInt(LOADER_OFF)* 1000);
            return () => clearTimeout(timer);
        }

      
      }, []);

    return {
        showLoaderState,
        fullDashboard,
        onFullDashboardLoad,
        onShowLoader
    }
}
