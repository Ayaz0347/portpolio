import { makeStyles } from "@material-ui/core"
import {Theme} from './Theme'
import Image from "../../src/images/brandBanner.jpg"
export const useStyles=makeStyles(()=>({
    HeaderWrapper:{
        minHeight:"90vh",
        height:'auto',
        width:"100%",
        background:`linear-gradient(to bottom right, #04303240, #00606473), url(${Image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover'
    } ,
    // HeaderContainer:{
    //     minHeight:"90vh",
    //     height:'auto',
    //     width:"100%",
    //     display:"flex",
    //     flexFlow:"column wrap",
    //     alignItems:"center"
    // },
    navbar:{
        backgroundColor:Theme.colors.base1,
        color:Theme.colors.base2,
    },
    toolbar:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between"
    },
    navlinks:{
        color:Theme.colors.base2,
    }
 }))