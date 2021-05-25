import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Date(date) {
    const [year, month ,day]=date.split('-')
        return(`民國 ${year-1911}年-${month}月-${day}號`);
}
const useStyles = makeStyles((theme) => ({  
    container: {    
        display: 'flex',    
        flexWrap: 'wrap',  
    },  
    textField: {    
        marginLeft: theme.spacing(1),    
        marginRight: theme.spacing(0),    
        width: 160,  
    },
    textField2: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(1),
        width: 50,
    },
}));
export default function DatePickers() {  
    const classes = useStyles();
    const [myDate,setMydate] = useState("民國110年-05月-25號")  
    return (    
        <form className={classes.container} noValidate>      
            <TextField value={myDate}
                id="basic"
                label="去阿公店喝茶囉!!!"
                className={classes.textField}
                 InputLabelProps={{
                     shrink: true
                   }}
            />
            <TextField 
                id="date"
                label=" "
                type="date"
                className={classes.textField2}
                onChange={event => {
                    setMydate(Date(event.target.value))
                }}
                InputLabelProps={{
                shrink: true
                }}
            />
        </form>
    );
}     