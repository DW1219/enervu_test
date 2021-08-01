import React, { useState, useEffect } from 'react';
import './AnimationTestPage.css';
import { withStyles } from '@material-ui/core/styles';
import { yellow, red, blue, green, purple, pink, lightBlue, lightGreen, lime, cyan } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


function AnimationTestPage() {
    console.log("렌더링테스트")

    const [SwitchState, setSwitchState] = useState({
        checkedSolarToBatt: true,
        checkedSolarToHome: true,
        checkedSolarToGrid: true,
        checkedBattToHome: false,
        checkedGridToHome: false,
        checkedGridToBatt: false,
        //checkedOnlyForHome: false,
    })

/*
    const [LineVisible, setLineVisible] = useState({
        lineSolarToBatt: "visible",
        lineSolarToHome: "visible",
        lineSolarToGrid: "visible",
        lineBattToHome: "visible",
        lineGridToBatt: "visible",
        lineGridToHome: "visible",
    })
*/
    
    const [LineSolarToBatt, setLineSolarToBatt] = useState("hidden")
    const [LineSolarToHome, setLineSolarToHome] = useState("hidden")
    const [LineSolarToGrid, setLineSolarToGrid] = useState("hidden")
    const [LineBattToHome, setLineBattToHome] = useState("hidden")
    const [LineGridToBatt, setLineGridToBatt] = useState("hidden")
    const [LineGridToHome, setLineGridToHome] = useState("hidden")

    const [LiveSolarToBatt, setLiveSolarToBatt] = useState("hidden")
    const [LiveSolarToHome, setLiveSolarToHome] = useState("hidden")
    const [LiveSolarToGrid, setLiveSolarToGrid] = useState("hidden")
    const [LiveBattToHome, setLiveBattToHome] = useState("hidden")
    const [LiveGridToBatt, setLiveGridToBatt] = useState("hidden")
    const [LiveGridToHome, setLiveGridToHome] = useState("hidden")


    const [LiveSolar, setLiveSolar] = useState("hidden")
    const [LiveBatt, setLiveBatt] = useState("hidden")
    const [LiveGrid, setLiveGrid] = useState("hidden")
    const [LiveHome, setLiveHome] = useState("hidden")
    const [BlurSolar, setBlurSolar] = useState("hidden")
    const [BlurBatt, setBlurBatt] = useState("hidden")
    const [BlurGrid, setBlurGrid] = useState("hidden")

    const [WhiteThemeMode, setWhiteThemeMode] = useState("visible")
    const [DarkThemeMode, setDarkThemeMode] = useState("hidden")


    const [ThemeMode, setThemeMode] = useState({
        currentTheme: "white",
        solarSwitchFont: "#FF007A", //red
        battSwitchFont: "#00EE00", //green
        gridSwitchFont: "#FFCC00", //yellow
        colorFillIn: "white",
        colorLiveGridImage: "#FFF500", //yellow
        colorLiveHomeImage: "#00D1FF", //blue
        colorLiveBattImage: "#05FF00", //green
        colorLiveSolarImage: "#FF007A", //red
        colorLiveKwFont: "#555555"
    })


    const handleChange = (event) => {
        setSwitchState({ ...SwitchState, [event.target.name]: event.target.checked });

    };
    const YellowSwitch = withStyles({
        switchBase: {
            color: yellow[200],
            '&$checked': {
                color: yellow[600],
            },
            '&$checked + $track': {
                backgroundColor: yellow[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);
    const RedSwitch = withStyles({
        switchBase: {
            color: red[200],
            '&$checked': {
                color: red[600],
            },
            '&$checked + $track': {
                backgroundColor: red[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);
    const BlueSwitch = withStyles({
        switchBase: {
            color: blue[200],
            '&$checked': {
                color: blue[600],
            },
            '&$checked + $track': {
                backgroundColor: blue[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);
    const GreenSwitch = withStyles({
        switchBase: {
            color: green[200],
            '&$checked': {
                color: green[600],
            },
            '&$checked + $track': {
                backgroundColor: green[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);
    const CyanSwitch = withStyles({
        switchBase: {
            color: cyan[200],
            '&$checked': {
                color: cyan[600],
            },
            '&$checked + $track': {
                backgroundColor: cyan[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);


    const viewModeChange = () => {
        console.log("ThemeMode 변경됨")
        const updateThemeValue = { ...ThemeMode }

        if (ThemeMode.currentTheme === "white") {            //Change to dark mode
            updateThemeValue["currentTheme"] = "dark"
            updateThemeValue["colorFillIn"] = "#333333"
            updateThemeValue["colorLiveGridImage"] = "white"
            updateThemeValue["colorLiveHomeImage"] = "white"
            updateThemeValue["colorLiveBattImage"] = "white"
            updateThemeValue["colorLiveSolarImage"] = "white"
            updateThemeValue["solarSwitchFont"] = "#FF007A"
            updateThemeValue["colorLiveKwFont"] = "white"
            setThemeMode(updateThemeValue)
            //console.log(updateThemeValue)
            //console.log(ThemeMode)
        }
        else {                                               //Change to white mode
            updateThemeValue["currentTheme"] = "white"       
            updateThemeValue["colorFillIn"] = "white"
            updateThemeValue["colorLiveGridImage"] = "#FFF500"
            updateThemeValue["colorLiveHomeImage"] = "#00D1FF"
            updateThemeValue["colorLiveBattImage"] = "#05FF00"
            updateThemeValue["colorLiveSolarImage"] = "#FF007A"
            updateThemeValue["solarSwitchFont"] = "#FF0066"
            updateThemeValue["colorLiveKwFont"] = "#555555"
            setThemeMode(updateThemeValue)
            //console.log(updateThemeValue)
            //console.log(ThemeMode)
        }

    }

    const commonSolarToBattControl = (flag) => {
        setLineSolarToBatt(flag)
        setLiveSolar(flag)
        setBlurSolar(flag)
        setLiveSolarToBatt(flag)
        setLiveBatt(flag)
    }
    const commonSolarToHomeControl = (flag) => {
        setLineSolarToHome(flag)
        setLiveSolar(flag)
        setBlurSolar(flag)
        setLiveSolarToHome(flag)
        setLiveHome(flag)
    }
    const commonSolarToGridControl = (flag) => {
        setLineSolarToGrid(flag)
        setLiveSolar(flag)
        setBlurSolar(flag)
        setLiveSolarToGrid(flag)
        setLiveGrid(flag)
    }
    const commonBattToHomeControl = (flag) => {
        setLineBattToHome(flag)
        setLiveBatt(flag)
        setBlurBatt(flag)
        setLiveBattToHome(flag)
        setLiveHome(flag)
    }
    const commonGridToHomeControl = (flag) => {
        setLineGridToHome(flag)
        setLiveGrid(flag)
        setBlurGrid(flag)
        setLiveGridToHome(flag)
        setLiveHome(flag)
    }
    const commonGridToBattControl = (flag) => {
        setLineGridToBatt(flag)
        setLiveGrid(flag)
        setBlurGrid(flag)
        setLiveGridToBatt(flag)
        setLiveBatt(flag)
    }
//    const commonOnlyForHomeControl = (flag) => {   
//    }


    useEffect(() => {
            console.log("여기는 hook 안입니다")
        
        if (SwitchState.checkedSolarToBatt === true) {                     // SolarToBatt : ON
            commonSolarToBattControl("visible")
        } else {   // (SwitchState.checkedSolarToBatt === false)           // SolarToBatt : OFF
            commonSolarToBattControl("hidden")
            if (SwitchState.checkedSolarToHome === true || SwitchState.checkedSolarToGrid === true) {
                setLiveSolar("visible")
                setBlurSolar("visible")
            }
            if (SwitchState.checkedBattToHome === true || SwitchState.checkedGridToBatt === true) {
                setLiveBatt("visible")
            }
        }

        if (SwitchState.checkedSolarToHome === true) {                     // SolarToHome : ON
            commonSolarToHomeControl("visible")
        } else {                                                           // SolarToHome : OFF
            commonSolarToHomeControl("hidden")
            if (SwitchState.checkedSolarToBatt === true || SwitchState.checkedSolarToGrid === true) {
                setLiveSolar("visible")
                setBlurSolar("visible")
            }
            if (SwitchState.checkedBattToHome === true || SwitchState.checkedGridToHome === true) {
                setLiveHome("visible")
            }
        }
        

        if (SwitchState.checkedSolarToGrid === true) {                     // SolarToGrid : ON
            commonSolarToGridControl("visible")
        } else {                                                           // SolarToGrid : OFF
            commonSolarToGridControl("hidden")
            if (SwitchState.checkedSolarToBatt === true || SwitchState.checkedSolarToHome === true) {
                setLiveSolar("visible")
                setBlurSolar("visible")
            }
            if (SwitchState.checkedBattToHome === true || SwitchState.checkedGridToHome === true) {
                setLiveHome("visible")
            }
        }

        if (SwitchState.checkedBattToHome === true) {                      // BattToHome : ON
            commonBattToHomeControl("visible")
        } else {                                                           // BattToHome : OFF
            commonBattToHomeControl("hidden")
            if (SwitchState.checkedSolarToBatt === true || SwitchState.checkedGridToBatt === true) {
                setLiveBatt("visible")
            }
            if (SwitchState.checkedSolarToHome === true || SwitchState.checkedGridToHome === true) {
                setLiveHome("visible")
            }
        }

        if (SwitchState.checkedGridToHome === true) {                      // GridToHome : ON
            commonGridToHomeControl("visible")
        } else {                                                           // GridToHome : OFF
            commonGridToHomeControl("hidden")
            if (SwitchState.checkedSolarToGrid === true) {
                setLiveGrid("visible")
            }
            if (SwitchState.checkedSolarToHome === true || SwitchState.checkedBattToHome === true) {
                setLiveHome("visible")
            }
        }

        if (SwitchState.checkedGridToBatt === true) {                      // GridToBatt : ON
            commonGridToBattControl("visible")
        } else {                                                           // GridToBatt : OFF
            commonGridToBattControl("hidden")
            if (SwitchState.checkedGridToHome === true) {
                setLiveGrid("visible")
                setBlurGrid("visible")
            }
            if (SwitchState.checkedSolarToGrid === true) {
                setLiveGrid("visible")
            }
            if (SwitchState.checkedSolarToBatt === true || SwitchState.checkedBattToHome === true) {
                setLiveBatt("visible")
            }
        }



        
    }, [SwitchState])

    console.log("이곳은 렌더링의 마지막부분입니다")
    //console.log(ThemeMode)

    return (
        <div>
            <div class='wrap_component' style={{ backgroundColor: `${ThemeMode.colorFillIn}` }}>
            <div class='wrap_svg'>
                <svg width="360" height="380" viewBox="0 0 360 380" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={viewModeChange}>

                    <g id="lg_enervu_frame" clip-path="url(#clip0)">
<g id="whiteMode_frame" visibility={WhiteThemeMode}>
                        <g id="drawing_line_group">
                            <path id="curve_solarToCharge" d="M143.075 76C53.9999 101.5 28.5 187 45.6711 246.747" stroke="url(#paint0_linear)" visibility={LineSolarToBatt} />
                            <path id="curve_solarToGrid" d="M217.662 76C306.737 101.5 332.237 187 315.066 246.747" stroke="url(#paint1_linear)" visibility={LineSolarToGrid} />
                            <path id="curve_gridToCharge" d="M279.5 308.288C213.213 373.024 123.395 352.808 80.0071 308.288" stroke="url(#paint2_linear)" visibility={LineGridToBatt} />
                            <path id="line_solarToHome" d="M180 106L180 190" stroke="url(#paint3_linear)" visibility={LineSolarToHome} />
                            <path id="line_chargeToHome" d="M80 263L163 218" stroke="url(#paint4_linear)" visibility={LineBattToHome} />
                            <path id="line_gridToHome" d="M280 264L198 217" stroke="url(#paint5_linear)" visibility={LineGridToHome} />
                        </g>
                        <g id="moving_circle_group">
                            <circle class="solarToGrid" r="3" fill="white" fill-opacity="0.8" visibility={LiveSolarToGrid}></circle>
                            <circle class="solarToGrid" r="16" fill="white" fill-opacity="0.3" visibility={LiveSolarToGrid}></circle>
                            <circle class="solarToHome" r="3" fill="white" fill-opacity="0.8" visibility={LiveSolarToHome}></circle>
                            <circle class="solarToHome" r="16" fill="white" fill-opacity="0.3" visibility={LiveSolarToHome}></circle>
                            <circle class="solarToBatt" r="3" fill="white" fill-opacity="0.8" visibility={LiveSolarToBatt}></circle>
                            <circle class="solarToBatt" r="16" fill="white" fill-opacity="0.3" visibility={LiveSolarToBatt}></circle>

                            <circle class="battToHome" r="3" fill="white" fill-opacity="0.8" visibility={LiveBattToHome}></circle>
                            <circle class="battToHome" r="16" fill="white" fill-opacity="0.3" visibility={LiveBattToHome}></circle>
                            <circle class="gridToBatt" r="3" fill="white" fill-opacity="0.8" visibility={LiveGridToBatt}></circle>
                            <circle class="gridToBatt" r="16" fill="white" fill-opacity="0.3" visibility={LiveGridToBatt}></circle>
                            <circle class="gridToHome" r="3" fill="white" fill-opacity="0.8" visibility={LiveGridToHome}></circle>
                            <circle class="gridToHome" r="16" fill="white" fill-opacity="0.3" visibility={LiveGridToHome}></circle>
                        </g>
<g id="dead_grid_group">
<circle id="dead_circle_grid" cx="297" cy="280" r="47" fill="white" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="2"/>
                            <g id="dead_grid_image">
                                <g id="Vector">
<path d="M269 286.051H271.78V288.788C271.78 289.541 271.155 290.156 270.39 290.156C269.626 290.156 269 289.541 269 288.788V286.051ZM323.22 288.788C323.22 289.541 323.845 290.156 324.61 290.156C325.374 290.156 326 289.541 326 288.788V286.051H323.22V288.788ZM284.946 283.314L285.697 276.26L269.48 283.314H284.946ZM309.303 276.26L310.054 283.314H325.52L309.303 276.26ZM270.39 271.683C271.155 271.683 271.78 271.067 271.78 270.315V267.578H269V270.315C269 271.067 269.626 271.683 270.39 271.683ZM323.22 267.578V270.315C323.22 271.067 323.845 271.683 324.61 271.683C325.374 271.683 326 271.067 326 270.315V267.578H323.22ZM287.768 256.884L269.48 264.841H286.92L287.768 256.884ZM325.52 264.841L307.232 256.884L308.08 264.841H325.52ZM286.024 299.372L295.442 290.888L287.678 283.896L286.024 299.372ZM306.46 280.961L297.5 272.887L288.54 280.961L297.5 289.034L306.46 280.961ZM307.322 283.896L299.558 290.888L308.976 299.372L307.322 283.896ZM289.61 265.786L288.373 277.403L295.442 271.033L289.61 265.786ZM289.979 262.406L297.5 269.179L305.021 262.406L304.625 258.684H290.375L289.979 262.406ZM299.558 271.033L306.627 277.403L305.383 265.786L299.558 271.033ZM291.105 251.842L290.667 255.947H304.333L303.895 251.842H291.105ZM306.537 245H288.463V249.105H306.537V245ZM314.183 301.103H306.78L297.5 292.743L288.22 301.103H280.817C280.052 301.103 279.427 301.719 279.427 302.472C279.427 303.224 280.052 303.84 280.817 303.84H314.183C314.948 303.84 315.573 303.224 315.573 302.472C315.573 301.719 314.948 301.103 314.183 301.103Z" fill="#DEDEDE"/>
<path d="M306.613 301.289L306.684 301.353H306.78H314.183C314.813 301.353 315.323 301.861 315.323 302.472C315.323 303.082 314.813 303.59 314.183 303.59H280.817C280.187 303.59 279.677 303.082 279.677 302.472C279.677 301.861 280.187 301.353 280.817 301.353H288.22H288.316L288.387 301.289L297.5 293.079L306.613 301.289ZM271.53 286.301V288.788C271.53 289.399 271.021 289.906 270.39 289.906C269.76 289.906 269.25 289.399 269.25 288.788V286.301H271.53ZM324.61 289.906C323.979 289.906 323.47 289.399 323.47 288.788V286.301H325.75V288.788C325.75 289.399 325.24 289.906 324.61 289.906ZM270.681 283.064L285.403 276.661L284.721 283.064H270.681ZM310.279 283.064L309.597 276.661L324.319 283.064H310.279ZM271.53 270.315C271.53 270.926 271.021 271.433 270.39 271.433C269.76 271.433 269.25 270.926 269.25 270.315V267.828H271.53V270.315ZM323.47 270.315V267.828H325.75V270.315C325.75 270.926 325.24 271.433 324.61 271.433C323.979 271.433 323.47 270.926 323.47 270.315ZM270.681 264.591L287.474 257.285L286.695 264.591H270.681ZM307.526 257.285L324.319 264.591H308.305L307.526 257.285ZM287.874 284.409L295.069 290.888L286.342 298.749L287.874 284.409ZM288.913 280.961L297.5 273.224L306.087 280.961L297.5 288.698L288.913 280.961ZM308.658 298.749L299.931 290.888L307.126 284.409L308.658 298.749ZM295.069 271.033L288.691 276.78L289.807 266.299L295.069 271.033ZM304.759 262.305L297.5 268.843L290.241 262.305L290.6 258.934H304.4L304.759 262.305ZM305.186 266.299L306.309 276.78L299.931 271.033L305.186 266.299ZM304.055 255.697H290.945L291.33 252.092H303.67L304.055 255.697ZM288.713 245.25H306.287V248.855H288.713V245.25Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
                        <g id="blur_circle_grid" filter="url(#filter0_dd)" visibility={BlurGrid}>
<circle cx="297" cy="280" r="47" fill="white" shape-rendering="crispEdges"/>
<circle cx="297" cy="280" r="47" stroke="#FFF500" stroke-opacity="0.9" stroke-width="2" shape-rendering="crispEdges"/>
                        </g>
<g id="live_grid_group" visibility={LiveGrid}>
<circle id="live_circle_grid" cx="297" cy="280" r="47" fill="white" stroke="#FFF500" stroke-opacity="0.9" stroke-width="2"/>
<g id="live_grid_image">
<g id="Vector_2">
<path d="M269 286.05H271.78V288.787C271.78 289.54 271.155 290.155 270.39 290.155C269.626 290.155 269 289.54 269 288.787V286.05ZM323.22 288.787C323.22 289.54 323.845 290.155 324.61 290.155C325.374 290.155 326 289.54 326 288.787V286.05H323.22V288.787ZM284.946 283.314L285.697 276.26L269.48 283.314H284.946ZM309.303 276.26L310.054 283.314H325.52L309.303 276.26ZM270.39 271.683C271.155 271.683 271.78 271.067 271.78 270.314V267.578H269V270.314C269 271.067 269.626 271.683 270.39 271.683ZM323.22 267.578V270.314C323.22 271.067 323.845 271.683 324.61 271.683C325.374 271.683 326 271.067 326 270.314V267.578H323.22ZM287.768 256.884L269.48 264.841H286.92L287.768 256.884ZM325.52 264.841L307.232 256.884L308.08 264.841H325.52ZM286.024 299.371L295.442 290.887L287.678 283.895L286.024 299.371ZM306.46 280.96L297.5 272.887L288.54 280.96L297.5 289.033L306.46 280.96ZM307.322 283.895L299.558 290.887L308.976 299.371L307.322 283.895ZM289.61 265.785L288.373 277.402L295.442 271.033L289.61 265.785ZM289.979 262.405L297.5 269.179L305.021 262.405L304.625 258.683H290.375L289.979 262.405ZM299.558 271.033L306.627 277.402L305.383 265.785L299.558 271.033ZM291.105 251.842L290.667 255.947H304.333L303.895 251.842H291.105ZM306.537 245H288.463V249.105H306.537V245ZM314.183 301.102H306.78L297.5 292.741L288.22 301.102H280.817C280.052 301.102 279.427 301.718 279.427 302.47C279.427 303.223 280.052 303.839 280.817 303.839H314.183C314.948 303.839 315.573 303.223 315.573 302.47C315.573 301.718 314.948 301.102 314.183 301.102Z" fill="#FFF500"/>
<path d="M306.613 301.288L306.684 301.352H306.78H314.183C314.813 301.352 315.323 301.86 315.323 302.47C315.323 303.081 314.813 303.589 314.183 303.589H280.817C280.187 303.589 279.677 303.081 279.677 302.47C279.677 301.86 280.187 301.352 280.817 301.352H288.22H288.316L288.387 301.288L297.5 293.078L306.613 301.288ZM271.53 286.3V288.787C271.53 289.398 271.021 289.905 270.39 289.905C269.76 289.905 269.25 289.398 269.25 288.787V286.3H271.53ZM324.61 289.905C323.979 289.905 323.47 289.398 323.47 288.787V286.3H325.75V288.787C325.75 289.398 325.24 289.905 324.61 289.905ZM270.681 283.064L285.403 276.66L284.721 283.064H270.681ZM310.279 283.064L309.597 276.66L324.319 283.064H310.279ZM271.53 270.314C271.53 270.925 271.021 271.433 270.39 271.433C269.76 271.433 269.25 270.925 269.25 270.314V267.828H271.53V270.314ZM323.47 270.314V267.828H325.75V270.314C325.75 270.925 325.24 271.433 324.61 271.433C323.979 271.433 323.47 270.925 323.47 270.314ZM270.681 264.591L287.474 257.285L286.695 264.591H270.681ZM307.526 257.285L324.319 264.591H308.305L307.526 257.285ZM287.874 284.409L295.069 290.887L286.342 298.748L287.874 284.409ZM288.913 280.96L297.5 273.223L306.087 280.96L297.5 288.697L288.913 280.96ZM308.658 298.748L299.931 290.887L307.126 284.409L308.658 298.748ZM295.069 271.033L288.691 276.78L289.807 266.298L295.069 271.033ZM304.759 262.305L297.5 268.842L290.241 262.305L290.6 258.933H304.4L304.759 262.305ZM305.186 266.299L306.309 276.779L299.931 271.033L305.186 266.299ZM304.055 255.697H290.945L291.33 252.092H303.67L304.055 255.697ZM288.713 245.25H306.287V248.855H288.713V245.25Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
                        <g id="dead_home_group">
<circle id="dead_circle_home" cx="180" cy="213" r="44" fill="white" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="2"/>
                            <g id="dead_home_image">
<g id="Vector_3">
<path fill-rule="evenodd" clip-rule="evenodd" d="M179.506 192.497L158.4 210.041V227.586C158.4 228.873 159.528 230 160.817 230H173.706V215.675H185.468V230H198.357C199.646 230 200.773 228.873 200.773 227.586V210.041L179.506 192.497Z" fill="#DEDEDE"/>
<path d="M173.706 215.425H173.456V215.675V229.75H160.817C159.666 229.75 158.65 228.735 158.65 227.586V210.158L179.507 192.821L200.523 210.159V227.586C200.523 228.735 199.508 229.75 198.357 229.75H185.718V215.675V215.425H185.468H173.706Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M208.668 205.856L200.773 199.257V184.288C200.773 183.644 200.29 183.161 199.485 183.161H192.557C191.751 183.161 191.268 183.644 191.268 184.288V191.37L182.406 183.966C180.795 182.678 178.378 182.678 176.767 183.966L150.506 205.856C149.861 206.339 149.861 207.144 150.345 207.627L152.6 210.202C153.083 210.846 153.728 210.846 154.211 210.363L179.506 189.277L204.962 210.363C205.446 210.846 206.251 210.685 206.574 210.202L208.829 207.627C209.312 206.983 209.312 206.339 208.668 205.856Z" fill="#DEDEDE"/>
<path d="M208.508 206.048L208.507 206.048L208.518 206.056C208.795 206.264 208.908 206.484 208.922 206.698C208.937 206.918 208.851 207.179 208.635 207.469L206.385 210.037L206.375 210.05L206.366 210.063C206.121 210.43 205.499 210.545 205.139 210.186L205.131 210.178L205.122 210.171L179.666 189.085L179.506 188.952L179.346 189.085L154.051 210.171L154.043 210.178L154.035 210.186C153.832 210.389 153.617 210.47 153.424 210.456C153.231 210.442 153.01 210.331 152.8 210.052L152.794 210.044L152.788 210.037L150.533 207.462L150.527 207.456L150.521 207.45C150.143 207.072 150.136 206.445 150.656 206.056L150.656 206.057L150.666 206.048L176.925 184.159C178.445 182.947 180.729 182.947 182.248 184.159C182.249 184.16 182.25 184.16 182.25 184.161L191.107 191.562L191.518 191.905V191.37V184.288C191.518 184.031 191.612 183.818 191.778 183.668C191.945 183.516 192.204 183.411 192.557 183.411H199.485C199.837 183.411 200.096 183.516 200.263 183.668C200.429 183.818 200.523 184.031 200.523 184.288V199.257V199.374L200.613 199.449L208.508 206.048Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
<g id="live_home_group" visibility={LiveHome}>
<circle id="live_circle_home" cx="180" cy="213" r="44" fill="white" stroke="#00D1FF" stroke-opacity="0.9" stroke-width="2"/>
<g id="live_home_image">
<g id="Vector_5">
<path fill-rule="evenodd" clip-rule="evenodd" d="M179.506 192.497L158.4 210.041V227.586C158.4 228.873 159.528 230 160.817 230H173.706V215.675H185.468V230H198.357C199.646 230 200.773 228.873 200.773 227.586V210.041L179.506 192.497Z" fill="#00D1FF"/>
<path d="M173.706 215.425H173.456V215.675V229.75H160.817C159.666 229.75 158.65 228.735 158.65 227.586V210.158L179.507 192.821L200.523 210.159V227.586C200.523 228.735 199.508 229.75 198.357 229.75H185.718V215.675V215.425H185.468H173.706Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_6">
<path fill-rule="evenodd" clip-rule="evenodd" d="M208.668 205.856L200.773 199.257V184.288C200.773 183.644 200.29 183.161 199.485 183.161H192.557C191.751 183.161 191.268 183.644 191.268 184.288V191.37L182.406 183.966C180.795 182.678 178.378 182.678 176.767 183.966L150.506 205.856C149.861 206.339 149.861 207.144 150.345 207.627L152.6 210.202C153.083 210.846 153.728 210.846 154.211 210.363L179.506 189.277L204.962 210.363C205.446 210.846 206.251 210.685 206.574 210.202L208.829 207.627C209.312 206.983 209.312 206.339 208.668 205.856Z" fill="#00D1FF"/>
<path d="M208.508 206.048L208.507 206.048L208.518 206.056C208.795 206.264 208.908 206.484 208.922 206.698C208.937 206.918 208.851 207.179 208.635 207.469L206.385 210.037L206.375 210.05L206.366 210.063C206.121 210.43 205.499 210.545 205.139 210.186L205.131 210.178L205.122 210.171L179.666 189.085L179.506 188.952L179.346 189.085L154.051 210.171L154.043 210.178L154.035 210.186C153.832 210.389 153.617 210.47 153.424 210.456C153.231 210.442 153.01 210.331 152.8 210.052L152.794 210.044L152.788 210.037L150.533 207.462L150.527 207.456L150.521 207.45C150.143 207.072 150.136 206.445 150.656 206.056L150.656 206.057L150.666 206.048L176.925 184.159C178.445 182.947 180.729 182.947 182.248 184.159C182.249 184.16 182.25 184.16 182.25 184.161L191.107 191.562L191.518 191.905V191.37V184.288C191.518 184.031 191.612 183.818 191.778 183.668C191.945 183.516 192.204 183.411 192.557 183.411H199.485C199.837 183.411 200.096 183.516 200.263 183.668C200.429 183.818 200.523 184.031 200.523 184.288V199.257V199.374L200.613 199.449L208.508 206.048Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
<g id="dead_batt_group">
<circle id="dead_circle_batt" cx="61" cy="280" r="47" fill="white" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="2"/>
<g id="dead_batt_image">
<g id="Vector_7">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.364L60.9831 276.831L56.322 290.347L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" fill="#DEDEDE"/>
<path d="M53.3093 250.263V247.25H69.589V250.263V250.513H69.839H75.6483V301.75H47.25V250.513H53.0593H53.3093V250.263ZM67.7585 259.119V258.352L67.3065 258.971L54.7218 276.217L54.4574 276.579L54.9046 276.614L60.6412 277.055L56.0857 290.266L56.5247 290.494L68.6433 273.714L68.9025 273.355L68.4614 273.319L63.1923 272.88L67.7439 260.135L67.7585 260.094V260.051V259.119Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
<g id="blur_circle_batt" filter="url(#filter1_dd)" visibility={BlurBatt}>
<circle cx="61" cy="280" r="47" fill="white"/>
<circle cx="61" cy="280" r="46" stroke="#05FF00" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="live_batt_group" visibility={LiveBatt}>
<circle id="live_circle_batt" cx="61" cy="280" r="47" fill="white" stroke="#05FF00" stroke-opacity="0.9" stroke-width="2"/>
<g id="live_batt_image">
<g id="Vector_8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.364L60.9831 276.831L56.322 290.347L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" fill="#05FF00"/>
<path d="M53.3093 250.263V247.25H69.589V250.263V250.513H69.839H75.6483V301.75H47.25V250.513H53.0593H53.3093V250.263ZM67.7585 259.119V258.352L67.3065 258.971L54.7218 276.217L54.4574 276.579L54.9046 276.614L60.6412 277.055L56.0857 290.266L56.5247 290.494L68.6433 273.714L68.9025 273.355L68.4614 273.319L63.1923 272.88L67.7439 260.135L67.7585 260.094V260.051V259.119Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
<g id="dead_solar_group">
<circle id="dead_circle_solar" cx="180" cy="77" r="47" fill="white" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="2"/>
<g id="dead_solar_image">
<g id="Group">
<g id="Group_2">
<g id="Vector_9">
<path d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" fill="#DEDEDE"/>
<path d="M180.178 47.8171C185.562 47.8171 189.945 52.1998 189.945 57.5837C189.945 58.0846 189.895 58.5778 189.754 59.0673H170.514C170.459 58.5649 170.412 58.0734 170.412 57.5837C170.412 52.1998 174.794 47.8171 180.178 47.8171Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_10">
<path d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" fill="#DEDEDE"/>
<path d="M181.726 43.2009C181.726 44.026 181.067 44.6845 180.242 44.6845C179.411 44.6845 178.759 44.0199 178.759 43.2651V39.7336C178.759 38.9086 179.417 38.25 180.242 38.25C181.067 38.25 181.726 38.9086 181.726 39.7336V43.2009Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_11">
<path d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" fill="#DEDEDE"/>
<path d="M171.793 45.8404L171.792 45.8393L170.059 42.7573L170.059 42.7573L170.057 42.7539C169.674 42.0988 169.898 41.1672 170.601 40.7884L170.601 40.7886L170.609 40.7843C171.264 40.4021 172.195 40.6255 172.574 41.3289L172.574 41.329L172.577 41.3349L174.311 44.3528L174.311 44.3528L174.312 44.3542C174.694 45.0093 174.471 45.9408 173.767 46.3196L173.751 46.3285L173.736 46.3397C173.532 46.4928 173.331 46.5466 173.051 46.5466C172.547 46.5466 172.062 46.3248 171.793 45.8404Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_12">
<path d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" fill="#DEDEDE"/>
<path d="M168.432 49.1323L168.432 49.1323L168.438 49.1356C169.137 49.5121 169.367 50.3776 168.982 51.1013C168.705 51.5399 168.209 51.8117 167.722 51.8117C167.53 51.8117 167.258 51.7104 167.005 51.5844L163.997 49.8564C163.267 49.4047 163.074 48.5296 163.438 47.9582L163.443 47.9505L163.447 47.9425C163.824 47.2419 164.693 47.0121 165.417 47.4004L168.432 49.1323Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_13">
<path d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" fill="#DEDEDE"/>
<path d="M165.796 58.9388H162.264C161.439 58.9388 160.78 58.2802 160.78 57.4552C160.78 56.6301 161.439 55.9716 162.264 55.9716H165.796C166.621 55.9716 167.279 56.6301 167.279 57.4552C167.279 58.2802 166.621 58.9388 165.796 58.9388Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_14">
<path d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" fill="#DEDEDE"/>
<path d="M194.497 59.1314C193.672 59.1314 193.013 58.4729 193.013 57.6478C193.013 56.8228 193.672 56.1642 194.497 56.1642H198.028C198.853 56.1642 199.512 56.8228 199.512 57.6478C199.512 58.4729 198.853 59.1314 198.028 59.1314H194.497Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_15">
<path d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" fill="#DEDEDE"/>
<path d="M193.345 51.7165L193.332 51.7241L193.319 51.7333C193.115 51.8863 192.915 51.9401 192.635 51.9401C192.075 51.9401 191.597 51.663 191.386 51.1897L191.381 51.1771L191.374 51.1652C190.992 50.5101 191.215 49.5786 191.918 49.1998L191.919 49.1999L191.924 49.1965L194.942 47.4628L194.942 47.4628L194.944 47.462C195.599 47.0799 196.53 47.3032 196.909 48.0067L196.909 48.0067L196.913 48.0141C197.295 48.6692 197.072 49.6008 196.369 49.9795L196.369 49.9795L196.363 49.9829L193.345 51.7165Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_16">
<path d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" fill="#DEDEDE"/>
<path d="M187.842 41.5296L187.842 41.5297L187.847 41.5216C188.224 40.8201 189.094 40.5906 189.819 40.9811C190.52 41.3583 190.75 42.2265 190.361 42.951L188.632 45.9616C188.355 46.402 187.857 46.675 187.37 46.675C187.177 46.675 186.904 46.5729 186.65 46.4463C185.949 46.0664 185.727 45.1369 186.109 44.4829C186.109 44.4828 186.109 44.4827 186.109 44.4826L187.842 41.5296Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_17">
<path d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" fill="#DEDEDE"/>
<path d="M178.309 86.4775V86.2275H178.059H171.691L173.767 76.5825H186.524L188.539 86.2275H182.169H181.919V86.4775V94.8888V95.1388H182.169H186.92C187.232 95.1388 187.441 95.3479 187.441 95.6593V98.2277C187.441 98.539 187.232 98.7482 186.92 98.7482H173.308C172.997 98.7482 172.787 98.539 172.787 98.2277V95.6593C172.787 95.3479 172.997 95.1388 173.308 95.1388H178.059H178.309V94.8888V86.4775Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_18">
<path d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" fill="#DEDEDE"/>
<path d="M194.946 62.9703C195.299 62.9703 195.667 63.1728 195.883 63.5469L200.633 72.6153H189.756L187.741 62.9703H194.946Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_19">
<path d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" fill="#DEDEDE"/>
<path d="M185.778 72.6795H174.644L176.72 62.9703H183.763L185.778 72.6795Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_20">
<path d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" fill="#DEDEDE"/>
<path d="M190.567 76.5825H202.691L206.858 84.663C206.858 84.6635 206.858 84.6639 206.859 84.6644C207.226 85.4006 206.698 86.2275 205.926 86.2275H192.581L190.567 76.5825Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_21">
<path d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" fill="#DEDEDE"/>
<path d="M154.302 86.2275C153.53 86.2275 153.003 85.4011 153.369 84.665L157.6 76.5825H169.788L167.712 86.2275H154.302Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_22">
<path d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" fill="#DEDEDE"/>
<path d="M164.348 63.5414L164.352 63.5334L164.356 63.5251C164.503 63.1827 164.851 62.9703 165.282 62.9703H172.742L170.666 72.6153H159.657L164.348 63.5414Z" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
</g>
</g>
<g id="blur_circle_solar" filter="url(#filter2_dd)" visibility={BlurSolar}>
<circle cx="180" cy="77" r="47" fill="white" shape-rendering="crispEdges"/>
<circle cx="180" cy="77" r="47" stroke="#FF007A" stroke-opacity="0.9" stroke-width="2" shape-rendering="crispEdges"/>
</g>
<g id="live_solar_group" visibility={LiveSolar}>
<circle id="live_circle_solar" cx="180" cy="77" r="47" fill="white" stroke="#FF007A" stroke-opacity="0.9" stroke-width="2"/>
<g id="live_solar_image">
<g id="lsGroup">
<g id="Vector_23">
<path d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" fill="#FF007A"/>
<path d="M180.178 47.8171C185.562 47.8171 189.945 52.1998 189.945 57.5837C189.945 58.0846 189.895 58.5778 189.754 59.0673H170.514C170.459 58.5649 170.412 58.0734 170.412 57.5837C170.412 52.1998 174.794 47.8171 180.178 47.8171Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_24">
<path d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" fill="#FF007A"/>
<path d="M181.726 43.2009C181.726 44.026 181.067 44.6845 180.242 44.6845C179.411 44.6845 178.759 44.0199 178.759 43.2651V39.7336C178.759 38.9086 179.417 38.25 180.242 38.25C181.067 38.25 181.726 38.9086 181.726 39.7336V43.2009Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_25">
<path d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" fill="#FF007A"/>
<path d="M171.793 45.8404L171.792 45.8393L170.059 42.7573L170.059 42.7573L170.057 42.7539C169.674 42.0988 169.898 41.1672 170.601 40.7884L170.601 40.7886L170.609 40.7843C171.264 40.4021 172.195 40.6255 172.574 41.3289L172.574 41.329L172.577 41.3349L174.311 44.3528L174.311 44.3528L174.312 44.3542C174.694 45.0093 174.471 45.9408 173.767 46.3196L173.751 46.3285L173.736 46.3397C173.532 46.4928 173.331 46.5466 173.051 46.5466C172.547 46.5466 172.062 46.3248 171.793 45.8404Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_26">
<path d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" fill="#FF007A"/>
<path d="M168.432 49.1323L168.432 49.1323L168.438 49.1356C169.137 49.5121 169.367 50.3776 168.982 51.1013C168.705 51.5399 168.209 51.8117 167.722 51.8117C167.53 51.8117 167.258 51.7104 167.005 51.5844L163.997 49.8564C163.267 49.4047 163.074 48.5296 163.438 47.9582L163.443 47.9505L163.447 47.9425C163.824 47.2419 164.693 47.0121 165.417 47.4004L168.432 49.1323Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_27">
<path d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" fill="#FF007A"/>
<path d="M165.796 58.9388H162.264C161.439 58.9388 160.78 58.2802 160.78 57.4552C160.78 56.6301 161.439 55.9716 162.264 55.9716H165.796C166.621 55.9716 167.279 56.6301 167.279 57.4552C167.279 58.2802 166.621 58.9388 165.796 58.9388Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_28">
<path d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" fill="#FF007A"/>
<path d="M194.497 59.1314C193.672 59.1314 193.013 58.4729 193.013 57.6478C193.013 56.8228 193.672 56.1642 194.497 56.1642H198.028C198.853 56.1642 199.512 56.8228 199.512 57.6478C199.512 58.4729 198.853 59.1314 198.028 59.1314H194.497Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_29">
<path d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" fill="#FF007A"/>
<path d="M193.345 51.7165L193.332 51.7241L193.319 51.7333C193.115 51.8863 192.915 51.9401 192.635 51.9401C192.075 51.9401 191.597 51.663 191.386 51.1897L191.381 51.1771L191.374 51.1652C190.992 50.5101 191.215 49.5786 191.918 49.1998L191.919 49.1999L191.924 49.1965L194.942 47.4628L194.942 47.4628L194.944 47.462C195.599 47.0799 196.53 47.3032 196.909 48.0067L196.909 48.0067L196.913 48.0141C197.295 48.6692 197.072 49.6008 196.369 49.9795L196.369 49.9795L196.363 49.9829L193.345 51.7165Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_30">
<path d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" fill="#FF007A"/>
<path d="M187.842 41.5296L187.842 41.5297L187.847 41.5216C188.224 40.8201 189.094 40.5906 189.819 40.9811C190.52 41.3583 190.75 42.2265 190.361 42.951L188.632 45.9616C188.355 46.402 187.857 46.675 187.37 46.675C187.177 46.675 186.904 46.5729 186.65 46.4463C185.949 46.0664 185.727 45.1369 186.109 44.4829C186.109 44.4828 186.109 44.4827 186.109 44.4826L187.842 41.5296Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_31">
<path d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" fill="#FF007A"/>
<path d="M178.309 86.4775V86.2275H178.059H171.691L173.767 76.5825H186.524L188.539 86.2275H182.169H181.919V86.4775V94.8888V95.1388H182.169H186.92C187.232 95.1388 187.441 95.3479 187.441 95.6593V98.2277C187.441 98.539 187.232 98.7482 186.92 98.7482H173.308C172.997 98.7482 172.787 98.539 172.787 98.2277V95.6593C172.787 95.3479 172.997 95.1388 173.308 95.1388H178.059H178.309V94.8888V86.4775Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_32">
<path d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" fill="#FF007A"/>
<path d="M194.946 62.9703C195.299 62.9703 195.667 63.1728 195.883 63.5469L200.633 72.6153H189.756L187.741 62.9703H194.946Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_33">
<path d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" fill="#FF007A"/>
<path d="M185.778 72.6795H174.644L176.72 62.9703H183.763L185.778 72.6795Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_34">
<path d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" fill="#FF007A"/>
<path d="M190.567 76.5825H202.691L206.858 84.663C206.858 84.6635 206.858 84.6639 206.859 84.6644C207.226 85.4006 206.698 86.2275 205.926 86.2275H192.581L190.567 76.5825Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_35">
<path d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" fill="#FF007A"/>
<path d="M154.302 86.2275C153.53 86.2275 153.003 85.4011 153.369 84.665L157.6 76.5825H169.788L167.712 86.2275H154.302Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<g id="Vector_36">
<path d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" fill="#FF007A"/>
<path d="M164.348 63.5414L164.352 63.5334L164.356 63.5251C164.503 63.1827 164.851 62.9703 165.282 62.9703H172.742L170.666 72.6153H159.657L164.348 63.5414Z" stroke="#4F4F4F" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
</g>
</g>
</g>
</g>
<g id="darkMode_frame" visibility={DarkThemeMode}>
<g id="drawing_line_group_2">
<g id="curve_solarToBatt">
<g id="curve_solarToBatt6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter3_f)">
<path d="M143.085 76.0002C54.0096 101.5 28.5097 187 45.6808 246.747" stroke="url(#paint6_linear)" stroke-width="3"/>
</g>
<g id="curve_solarToBatt5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter4_f)">
<path d="M143.085 76.0002C54.0096 101.5 28.5097 187 45.6808 246.747" stroke="url(#paint7_linear)" stroke-width="2"/>
</g>
<g id="curve_solarToBatt4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter5_f)">
<path d="M143.085 76.0002C54.0096 101.5 28.5097 187 45.6808 246.747" stroke="#0085FF"/>
</g>
<g id="curve_solarToBatt3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter6_dddii)">
<path d="M143.085 76.0002C54.0096 101.5 28.5097 187 45.6808 246.747" stroke="url(#paint8_linear)" stroke-opacity="0.2" stroke-width="2.5"/>
</g>
<g id="curve_solarToBatt2" filter="url(#filter7_f)">
<path d="M143.085 76.0002C54.0096 101.5 28.5097 187 45.6808 246.747" stroke="url(#paint9_linear)" stroke-width="2"/>
</g>
<g id="curve_solarToBatt1" filter="url(#filter8_f)">
<path d="M143.085 76.0002C54.0096 101.5 28.5097 187 45.6808 246.747" stroke="white"/>
</g>
</g>
<g id="curve_solarToGridGroup">
<g id="curve_solarToGrid6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter9_f)">
<path d="M217.671 76C306.747 101.5 332.247 187 315.076 246.747" stroke="url(#paint10_linear)" stroke-width="3"/>
</g>
<g id="curve_solarToGrid5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter10_f)">
<path d="M217.671 76C306.747 101.5 332.247 187 315.076 246.747" stroke="url(#paint11_linear)" stroke-width="2"/>
</g>
<g id="curve_solarToGrid4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter11_f)">
<path d="M217.671 76C306.747 101.5 332.247 187 315.076 246.747" stroke="#0085FF"/>
</g>
<g id="curve_solarToGrid3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter12_dddii)">
<path d="M217.671 76C306.747 101.5 332.247 187 315.076 246.747" stroke="url(#paint12_linear)" stroke-opacity="0.2" stroke-width="2.5"/>
</g>
<g id="curve_solarToGrid2" filter="url(#filter13_f)">
<path d="M217.671 76C306.747 101.5 332.247 187 315.076 246.747" stroke="url(#paint13_linear)" stroke-width="2"/>
</g>
<g id="curve_solarToGrid1" filter="url(#filter14_f)">
<path d="M217.671 76.0008C306.747 101.501 332.247 187.001 315.076 246.747" stroke="white"/>
</g>
</g>
<g id="curve_gridToBattGroup">
<g id="curve_gridToBatt6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter15_f)">
<path d="M279.5 308.283C213.213 373.019 123.395 352.803 80.0068 308.283" stroke="url(#paint14_linear)" stroke-width="3"/>
</g>
<g id="curve_gridToBatt5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter16_f)">
<path d="M279.5 308.283C213.213 373.019 123.395 352.803 80.0068 308.283" stroke="url(#paint15_linear)" stroke-width="2"/>
</g>
<g id="curve_gridToBatt4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter17_f)">
<path d="M279.5 308.283C213.213 373.019 123.395 352.803 80.0068 308.283" stroke="#0085FF"/>
</g>
<g id="curve_gridToBatt3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter18_dddii)">
<path d="M279.5 308.283C213.213 373.019 123.395 352.803 80.0068 308.283" stroke="url(#paint16_linear)" stroke-opacity="0.2" stroke-width="2.5"/>
</g>
<g id="curve_gridToBatt2" filter="url(#filter19_f)">
<path d="M279.5 308.283C213.213 373.019 123.395 352.803 80.0068 308.283" stroke="url(#paint17_linear)" stroke-width="2"/>
</g>
<g id="curve_gridToBatt1" filter="url(#filter20_f)">
<path d="M279.5 308.283C213.213 373.019 123.395 352.803 80.0073 308.283" stroke="white"/>
</g>
</g>
<g id="line_solarToHomeGroup">
<g id="line_solarToHome6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter21_f)">
<path d="M180 106L180 190" stroke="url(#paint18_linear)" stroke-width="3"/>
</g>
<g id="line_solarToHome5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter22_f)">
<path d="M180 106L180 190" stroke="url(#paint19_linear)" stroke-width="2"/>
</g>
<g id="line_solarToHome4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter23_f)">
<path d="M180 106L180 190" stroke="#0085FF"/>
</g>
<g id="line_solarToHome3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter24_dddii)">
<path d="M180 106L180 190" stroke="url(#paint20_linear)" stroke-opacity="0.2" stroke-width="2.5"/>
</g>
<g id="line_solarToHome2" filter="url(#filter25_f)">
<path d="M180 106L180 190" stroke="url(#paint21_linear)" stroke-width="2"/>
</g>
<g id="line_solarToHome1" filter="url(#filter26_f)">
<path d="M180 106L180 190" stroke="white"/>
</g>
</g>
<g id="line_battToHomeGroup">
<g id="line_battToHome6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter27_f)">
<path d="M80.0002 263L163 218" stroke="url(#paint22_linear)" stroke-width="3"/>
</g>
<g id="line_battToHome5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter28_f)">
<path d="M80.0002 263L163 218" stroke="url(#paint23_linear)" stroke-width="2"/>
</g>
<g id="line_battToHome4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter29_f)">
<path d="M80.0002 263L163 218" stroke="#0085FF"/>
</g>
<g id="line_battToHome3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter30_dddii)">
<path d="M80.0002 263L163 218" stroke="url(#paint24_linear)" stroke-opacity="0.2" stroke-width="2.5"/>
</g>
<g id="line_battToHome2" filter="url(#filter31_f)">
<path d="M80.0002 263L163 218" stroke="url(#paint25_linear)" stroke-width="2"/>
</g>
<g id="line_battToHome1" filter="url(#filter32_f)">
<path d="M80.0002 263L163 218" stroke="white"/>
</g>
</g>
<g id="line_gridToHomeGroup">
<g id="line_gridToHome6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter33_f)">
<path d="M280 263.998L198 216.998" stroke="url(#paint26_linear)" stroke-width="3"/>
</g>
<g id="line_gridToHome5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter34_f)">
<path d="M280 263.998L198 216.998" stroke="url(#paint27_linear)" stroke-width="2"/>
</g>
<g id="line_gridToHome4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter35_f)">
<path d="M280 263.998L198 216.998" stroke="url(#paint28_linear)"/>
</g>
<g id="line_gridToHome3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter36_dddii)">
<path d="M280 263.998L198 216.998" stroke="url(#paint29_linear)" stroke-opacity="0.2" stroke-width="2.5"/>
</g>
<g id="line_gridToHome2" filter="url(#filter37_f)">
<path d="M280 263.998L198 216.998" stroke="url(#paint30_linear)" stroke-width="2"/>
</g>
<g id="line_gridToHome1" filter="url(#filter38_f)">
<path d="M280 263.998L198 216.998" stroke="white"/>
</g>
</g>
</g>
<g id="svg_home">
<g id="dead_home_group_2">
<g id="dead_circle_home_group">
<g id="dead_circle_home6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter39_f)">
<circle cx="180" cy="213" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_home5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter40_f)">
<circle cx="180" cy="213" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_home4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter41_f)">
<circle cx="180" cy="213" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="dead_circle_home3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter42_dddii)">
<circle cx="180" cy="213" r="47" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="dead_circle_home2" filter="url(#filter43_f)">
<circle cx="180" cy="213" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_home1" filter="url(#filter44_f)">
<circle cx="180" cy="213" r="47" fill="#333333"/>
<circle cx="180" cy="213" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="dead_home_image_2">
<g id="hGroup6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter45_f)">
<path id="Vector_37" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_38" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="hGroup5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter46_f)">
<path id="Vector_39" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_40" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="hGroup4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter47_f)">
<path id="Vector_41" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#0085FF"/>
<path id="Vector_42" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#0085FF"/>
</g>
<g id="hGroup3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter48_dddii)">
<path id="Vector_43" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_44" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
</g>
<g id="hGroup2" filter="url(#filter49_f)">
<path id="Vector_45" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_46" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#DEDEDE" stroke-width="2"/>
</g>
<g id="hGroup1" filter="url(#filter50_f)">
<path id="Vector_47" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_48" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
<g id="live_home_group_2">
<g id="live_circle_home_group">
<g id="live_circle_home6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter51_f)">
<circle cx="180" cy="213" r="47" stroke="#00D1FF" stroke-opacity="0.9" stroke-width="8"/>
</g>
<g id="live_circle_home5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter52_f)">
<circle cx="180" cy="213" r="47" stroke="#00D1FF" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="live_circle_home4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter53_f)">
<circle cx="180" cy="213" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="live_circle_home3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter54_dddii)">
<circle cx="180" cy="213" r="47" stroke="#00D1FF" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="live_circle_home2" filter="url(#filter55_f)">
<circle cx="180" cy="213" r="47" stroke="#00D1FF" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="live_circle_home1" filter="url(#filter56_f)">
<circle cx="180" cy="213" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="live_home_image_2">
<g id="hGroup6_2" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter57_f)">
<path id="Vector_49" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#00D1FF" stroke-width="8"/>
<path id="Vector_50" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#00D1FF" stroke-width="8"/>
</g>
<g id="hGroup5_2" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter58_f)">
<path id="Vector_51" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#00D1FF" stroke-width="3"/>
<path id="Vector_52" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#00D1FF" stroke-width="3"/>
</g>
<g id="hGroup4_2" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter59_f)">
<path id="Vector_53" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#0085FF"/>
<path id="Vector_54" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#0085FF"/>
</g>
<g id="hGroup3_2" style={{mixBlendMode: 'hard-light'}} filter="url(#filter60_dddii)">
<path id="Vector_55" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#00D1FF" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_56" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#00D1FF" stroke-opacity="0.2" stroke-width="3"/>
</g>
<g id="hGroup2_2" filter="url(#filter61_f)">
<path id="Vector_57" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" stroke="#00D1FF" stroke-width="2"/>
<path id="Vector_58" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" stroke="#00D1FF" stroke-width="2"/>
</g>
<g id="hGroup1_2" filter="url(#filter62_f)">
<path id="Vector_59" fill-rule="evenodd" clip-rule="evenodd" d="M179.506 191.497L158.4 209.041V226.586C158.4 227.873 159.528 229 160.817 229H173.706V214.675H185.467V229H198.357C199.646 229 200.773 227.873 200.773 226.586V209.041L179.506 191.497Z" fill="#00D1FF" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_60" fill-rule="evenodd" clip-rule="evenodd" d="M208.668 204.856L200.773 198.257V183.288C200.773 182.644 200.29 182.161 199.485 182.161H192.557C191.751 182.161 191.268 182.644 191.268 183.288V190.37L182.406 182.966C180.795 181.678 178.378 181.678 176.767 182.966L150.506 204.856C149.861 205.339 149.861 206.144 150.345 206.627L152.6 209.202C153.083 209.846 153.728 209.846 154.211 209.363L179.506 188.277L204.962 209.363C205.446 209.846 206.251 209.685 206.574 209.202L208.829 206.627C209.312 205.983 209.312 205.339 208.668 204.856Z" fill="#00D1FF" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
</g>
<g id="svg_grid">
<g id="dead_grid_group_2">
<g id="dead_circle_grid_group">
<g id="dead_circle_grid6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter63_f)">
<circle cx="297" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_grid5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter64_f)">
<circle cx="297" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_grid4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter65_f)">
<circle cx="297" cy="280" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="dead_circle_grid3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter66_dddii)">
<circle cx="297" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="dead_circle_grid2" filter="url(#filter67_f)">
<circle cx="297" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_grid1" filter="url(#filter68_f)">
<circle cx="297" cy="280" r="47" fill="#333333"/>
<circle cx="297" cy="280" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="dead_grid_image_2">
<g id="Vector6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter69_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="Vector5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter70_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="Vector4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter71_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#0085FF"/>
</g>
<g id="Vector3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter72_dddii)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3" shape-rendering="crispEdges"/>
</g>
<g id="Vector2" filter="url(#filter73_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#DEDEDE" stroke-width="2"/>
</g>
<g id="Vector1" filter="url(#filter74_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" fill="#DEDEDE" fill-opacity="0.7"/>
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
<g id="blur_circle_grid_2" filter="url(#filter75_dd)">
<circle cx="297" cy="280" r="47" fill="#333333"/>
</g>
<g id="live_grid_group_2">
<g id="live_circle_grid_group">
<g id="live_circle_grid6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter76_f)">
<circle cx="297" cy="280" r="47" stroke="#FFF500" stroke-opacity="0.9" stroke-width="8"/>
</g>
<g id="live_circle_grid5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter77_f)">
<circle cx="297" cy="280" r="47" stroke="#FFF500" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="live_circle_grid4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter78_f)">
<circle cx="297" cy="280" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="live_circle_grid3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter79_dddii)">
<circle cx="297" cy="280" r="47" stroke="#FFF500" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="live_circle_grid2" filter="url(#filter80_f)">
<circle cx="297" cy="280" r="47" stroke="#FFF500" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="live_circle_grid1" filter="url(#filter81_f)">
<circle cx="297" cy="280" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="live_grid_image_2">
<g id="Vector6_2" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter82_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#FFF500" stroke-width="3"/>
</g>
<g id="Vector5_2" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter83_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#FFF500" stroke-width="3"/>
</g>
<g id="Vector4_2" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter84_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#0085FF"/>
</g>
<g id="Vector3_2" style={{mixBlendMode: 'hard-light'}} filter="url(#filter85_dddii)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#FFF500" stroke-opacity="0.2" stroke-width="3" shape-rendering="crispEdges"/>
</g>
<g id="Vector2_2" filter="url(#filter86_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="#FFF500" stroke-width="2"/>
</g>
<g id="Vector1_2" filter="url(#filter87_f)">
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" fill="#FFF500" fill-opacity="0.7"/>
<path d="M270 284.89H272.634V287.482C272.634 288.195 272.041 288.779 271.317 288.779C270.593 288.779 270 288.195 270 287.482V284.89ZM321.366 287.482C321.366 288.195 321.959 288.779 322.683 288.779C323.407 288.779 324 288.195 324 287.482V284.89H321.366V287.482ZM285.107 282.297L285.818 275.615L270.454 282.297H285.107ZM308.182 275.615L308.893 282.297H323.546L308.182 275.615ZM271.317 271.278C272.041 271.278 272.634 270.695 272.634 269.982V267.389H270V269.982C270 270.695 270.593 271.278 271.317 271.278ZM321.366 267.389V269.982C321.366 270.695 321.959 271.278 322.683 271.278C323.407 271.278 324 270.695 324 269.982V267.389H321.366ZM287.78 257.259L270.454 264.797H286.977L287.78 257.259ZM323.546 264.797L306.22 257.259L307.023 264.797H323.546ZM286.128 297.509L295.051 289.472L287.695 282.848L286.128 297.509ZM305.489 280.067L297 272.419L288.511 280.067L297 287.716L305.489 280.067ZM306.305 282.848L298.949 289.472L307.872 297.509L306.305 282.848ZM289.526 265.691L288.353 276.697L295.051 270.663L289.526 265.691ZM289.875 262.489L297 268.906L304.125 262.489L303.75 258.963H290.25L289.875 262.489ZM298.949 270.663L305.647 276.697L304.468 265.691L298.949 270.663ZM290.941 252.482L290.527 256.371H303.473L303.059 252.482H290.941ZM305.561 246H288.439V249.889H305.561V246ZM312.805 299.149H305.791L297 291.229L288.209 299.149H281.195C280.471 299.149 279.878 299.733 279.878 300.446C279.878 301.159 280.471 301.742 281.195 301.742H312.805C313.529 301.742 314.122 301.159 314.122 300.446C314.122 299.733 313.529 299.149 312.805 299.149Z" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
</g>
<g id="svg_batt">
<g id="dead_batt_group_2">
<g id="dead_circle_batt_group">
<g id="dead_circle_batt6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter88_f)">
<circle cx="61" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_batt5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter89_f)">
<circle cx="61" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_batt4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter90_f)">
<circle cx="61" cy="280" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="dead_circle_batt3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter91_dddii)">
<circle cx="61" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="dead_circle_batt2" filter="url(#filter92_f)">
<circle cx="61" cy="280" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_batt1" filter="url(#filter93_f)">
<circle cx="61" cy="280" r="47" fill="#333333"/>
<circle cx="61" cy="280" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="dead_batt_image_2">
<g id="Vector6_3" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter94_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="Vector5_3" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter95_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="Vector4_3" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter96_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#0085FF" stroke-opacity="0.2"/>
</g>
<g id="Vector3_3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter97_dddii)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3" shape-rendering="crispEdges"/>
</g>
<g id="Vector2_3" filter="url(#filter98_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#DEDEDE" stroke-width="2"/>
</g>
<g id="Vector1_3" filter="url(#filter99_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" fill="#DEDEDE" fill-opacity="0.7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
<g id="blur_circle_batt_2" filter="url(#filter100_dd)">
<circle cx="61" cy="280" r="47" fill="#333333"/>
</g>
<g id="live_batt_group_2">
<g id="live_circle_batt_group">
<g id="live_circle_batt6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter101_f)">
<circle cx="61" cy="280" r="47" stroke="#05FF00" stroke-opacity="0.9" stroke-width="8"/>
</g>
<g id="live_circle_batt5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter102_f)">
<circle cx="61" cy="280" r="47" stroke="#05FF00" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="live_circle_batt4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter103_f)">
<circle cx="61" cy="280" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="live_circle_batt3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter104_dddii)">
<circle cx="61" cy="280" r="47" stroke="#05FF00" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="live_circle_batt2" filter="url(#filter105_f)">
<circle cx="61" cy="280" r="47" stroke="#05FF00" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="live_circle_batt1" filter="url(#filter106_f)">
<circle cx="61" cy="280" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="live_batt_image_2">
<g id="Vector6_4" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter107_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#05FF00" stroke-width="8"/>
</g>
<g id="Vector5_4" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter108_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#05FF00" stroke-width="3"/>
</g>
<g id="Vector4_4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter109_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#0085FF" stroke-opacity="0.2"/>
</g>
<g id="Vector3_4" style={{mixBlendMode: 'hard-light'}} filter="url(#filter110_dddii)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#05FF00" stroke-opacity="0.2" stroke-width="3" shape-rendering="crispEdges"/>
</g>
<g id="Vector2_4" filter="url(#filter111_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="#05FF00" stroke-width="2"/>
</g>
<g id="Vector1_4" filter="url(#filter112_f)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" fill="#05FF00" fill-opacity="0.7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.0593 247H69.839V250.263H75.8983V302H47V250.263H53.0593V247ZM67.5085 259.119L54.9237 276.365L60.9831 276.831L56.322 290.348L68.4407 273.568L62.8475 273.102L67.5085 260.051V259.119Z" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
</g>
<g id="svg_solar">
<g id="dead_solar_group_2">
<g id="dead_circle_solar_group">
<g id="dead_circle_solar6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter113_f)">
<circle cx="180" cy="77" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_solar5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter114_f)">
<circle cx="180" cy="77" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_solar4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter115_f)">
<circle cx="180" cy="77" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="dead_circle_solar3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter116_dddii)">
<circle cx="180" cy="77" r="47" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="dead_circle_solar2" filter="url(#filter117_f)">
<circle cx="180" cy="77" r="47" stroke="#DEDEDE" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="dead_circle_solar1" filter="url(#filter118_f)">
<circle cx="180" cy="77" r="47" fill="#333333"/>
<circle cx="180" cy="77" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="dead_solar_image_2">
<g id="Group6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter119_f)">
<path id="Vector_61" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_62" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_63" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_64" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_65" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_66" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_67" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_68" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_69" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_70" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_71" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_72" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_73" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_74" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="Group5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter120_f)">
<path id="Vector_75" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_76" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_77" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_78" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_79" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_80" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_81" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_82" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_83" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_84" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_85" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_86" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_87" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
<path id="Vector_88" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" fill="#DEDEDE" stroke="#DEDEDE" stroke-width="3"/>
</g>
<g id="Group4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter121_f)">
<path id="Vector_89" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#0085FF"/>
<path id="Vector_90" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#0085FF"/>
<path id="Vector_91" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#0085FF"/>
<path id="Vector_92" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#0085FF"/>
<path id="Vector_93" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#0085FF"/>
<path id="Vector_94" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#0085FF"/>
<path id="Vector_95" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#0085FF"/>
<path id="Vector_96" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#0085FF"/>
<path id="Vector_97" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#0085FF"/>
<path id="Vector_98" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#0085FF"/>
<path id="Vector_99" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#0085FF"/>
<path id="Vector_100" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#0085FF"/>
<path id="Vector_101" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#0085FF"/>
<path id="Vector_102" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#0085FF"/>
</g>
<g id="Group3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter122_dddii)">
<path id="Vector_103" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_104" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_105" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_106" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_107" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_108" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_109" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_110" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_111" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_112" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_113" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_114" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_115" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_116" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#DEDEDE" stroke-opacity="0.2" stroke-width="3"/>
</g>
<g id="Group2" filter="url(#filter123_f)">
<path id="Vector_117" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_118" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_119" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_120" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_121" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_122" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_123" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_124" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_125" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_126" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_127" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_128" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_129" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#DEDEDE" stroke-width="2"/>
<path id="Vector_130" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#DEDEDE" stroke-width="2"/>
</g>
<g id="Group1" filter="url(#filter124_f)">
<path id="Vector_131" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_132" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_133" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_134" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_135" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_136" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_137" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_138" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_139" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_140" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_141" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_142" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_143" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_144" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" fill="#DEDEDE" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
<g id="blur_circle_solar_2" filter="url(#filter125_dd)">
<circle cx="180" cy="77" r="47" fill="#333333"/>
</g>
<g id="blur_solar_group">
<g id="blur_circle_solar_group">
<g id="blur_circle_solar6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter126_f)">
<circle cx="180" cy="77" r="47" stroke="#FF007A" stroke-opacity="0.9" stroke-width="8"/>
</g>
<g id="blur_circle_solar5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter127_f)">
<circle cx="180" cy="77" r="47" stroke="#FF007A" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="blur_circle_solar4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter128_f)">
<circle cx="180" cy="77" r="47" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2"/>
</g>
<g id="blur_circle_solar3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter129_dddii)">
<circle cx="180" cy="77" r="47" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3.5"/>
</g>
<g id="blur_circle_solar2" filter="url(#filter130_f)">
<circle cx="180" cy="77" r="47" stroke="#FF007A" stroke-opacity="0.9" stroke-width="3"/>
</g>
<g id="blur_circle_solar1" filter="url(#filter131_f)">
<circle cx="180" cy="77" r="47" stroke="white" stroke-opacity="0.9" stroke-width="2"/>
</g>
</g>
<g id="blur_solar_image">
<g id="bGroup6" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter132_f)">
<path id="Vector_145" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_146" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_147" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_148" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_149" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_150" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_151" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_152" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_153" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_154" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_155" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_156" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_157" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#FF007A" stroke-width="8"/>
<path id="Vector_158" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#FF007A" stroke-width="8"/>
</g>
<g id="bGroup5" style={{mixBlendMode: 'color-dodge'}} filter="url(#filter133_f)">
<path id="Vector_159" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_160" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_161" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_162" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_163" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_164" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_165" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_166" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_167" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_168" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_169" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_170" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_171" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
<path id="Vector_172" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" fill="#DEDEDE" stroke="#FF007A" stroke-width="3"/>
</g>
<g id="bGroup4" style={{mixBlendMode: 'multiply'}} opacity="0.2" filter="url(#filter134_f)">
<path id="Vector_173" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#0085FF"/>
<path id="Vector_174" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#0085FF"/>
<path id="Vector_175" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#0085FF"/>
<path id="Vector_176" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#0085FF"/>
<path id="Vector_177" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#0085FF"/>
<path id="Vector_178" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#0085FF"/>
<path id="Vector_179" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#0085FF"/>
<path id="Vector_180" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#0085FF"/>
<path id="Vector_181" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#0085FF"/>
<path id="Vector_182" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#0085FF"/>
<path id="Vector_183" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#0085FF"/>
<path id="Vector_184" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#0085FF"/>
<path id="Vector_185" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#0085FF"/>
<path id="Vector_186" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#0085FF"/>
</g>
<g id="bGroup3" style={{mixBlendMode: 'hard-light'}} filter="url(#filter135_dddii)">
<path id="Vector_187" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_188" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_189" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_190" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_191" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_192" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_193" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_194" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_195" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_196" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_197" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_198" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_199" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
<path id="Vector_200" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#FF007A" stroke-opacity="0.2" stroke-width="3"/>
</g>
<g id="bGroup2" filter="url(#filter136_f)">
<path id="Vector_201" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_202" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_203" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_204" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_205" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_206" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_207" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_208" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_209" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_210" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_211" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_212" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_213" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" stroke="#FF007A" stroke-width="2"/>
<path id="Vector_214" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" stroke="#FF007A" stroke-width="2"/>
</g>
<g id="bGroup1" filter="url(#filter137_f)">
<path id="Vector_215" d="M190.195 57.5837C190.195 52.0617 185.7 47.5671 180.178 47.5671C174.656 47.5671 170.162 52.0617 170.162 57.5837C170.162 58.1616 170.226 58.7394 170.29 59.3173H189.938C190.131 58.7394 190.195 58.1616 190.195 57.5837Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_216" d="M180.242 44.9345C181.206 44.9345 181.976 44.164 181.976 43.2009V39.7336C181.976 38.7705 181.206 38 180.242 38C179.279 38 178.509 38.7705 178.509 39.7336V43.2651C178.509 44.164 179.279 44.9345 180.242 44.9345Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_217" d="M171.574 45.9619C171.895 46.5397 172.473 46.7966 173.051 46.7966C173.372 46.7966 173.629 46.7324 173.886 46.5397C174.72 46.0903 174.977 44.9987 174.528 44.2282L172.794 41.2104C172.345 40.3757 171.253 40.1189 170.483 40.5683C169.648 41.0178 169.391 42.1093 169.841 42.8798L171.574 45.9619Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_218" d="M163.869 50.0712L166.887 51.8049C167.144 51.9333 167.465 52.0617 167.722 52.0617C168.3 52.0617 168.877 51.7407 169.199 51.227C169.648 50.3923 169.391 49.3649 168.556 48.9155L165.539 47.1819C164.704 46.7324 163.677 46.9892 163.227 47.8239C162.778 48.5302 163.035 49.5576 163.869 50.0712Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_219" d="M162.264 59.1888H165.796C166.759 59.1888 167.529 58.4183 167.529 57.4552C167.529 56.4921 166.759 55.7216 165.796 55.7216H162.264C161.301 55.7216 160.53 56.4921 160.53 57.4552C160.53 58.4183 161.301 59.1888 162.264 59.1888Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_220" d="M192.763 57.6478C192.763 58.6109 193.534 59.3814 194.497 59.3814H198.028C198.991 59.3814 199.762 58.6109 199.762 57.6478C199.762 56.6847 198.991 55.9142 198.028 55.9142H194.497C193.534 55.9142 192.763 56.6847 192.763 57.6478Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_221" d="M192.635 52.1901C192.956 52.1901 193.213 52.1259 193.469 51.9333L196.487 50.1997C197.322 49.7502 197.579 48.6587 197.129 47.8881C196.68 47.0534 195.588 46.7966 194.818 47.2461L191.8 48.9797C190.965 49.4292 190.708 50.5207 191.158 51.2912C191.415 51.8691 191.993 52.1901 192.635 52.1901Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_222" d="M186.535 46.6681C186.792 46.7966 187.113 46.925 187.37 46.925C187.947 46.925 188.525 46.6039 188.846 46.0903L190.58 43.0725C191.029 42.2378 190.773 41.2104 189.938 40.761C189.103 40.3115 188.076 40.5683 187.626 41.403L185.893 44.3566C185.443 45.1271 185.7 46.2187 186.535 46.6681Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_223" d="M188.846 86.4775L186.728 76.3325H173.565L171.382 86.4775H178.059V94.8888H173.308C172.858 94.8888 172.537 95.2098 172.537 95.6593V98.2277C172.537 98.6771 172.858 98.9982 173.308 98.9982H186.92C187.37 98.9982 187.691 98.6771 187.691 98.2277V95.6593C187.691 95.2098 187.37 94.8888 186.92 94.8888H182.169V86.4775H188.846Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_224" d="M196.102 63.4266C195.845 62.9772 195.396 62.7203 194.946 62.7203H187.434L189.553 72.8653H201.046L196.102 63.4266Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_225" d="M174.335 72.9295H186.085L183.966 62.7203H176.518L174.335 72.9295Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_226" d="M207.082 84.5512L202.844 76.3325H190.259L192.378 86.4775H205.926C206.889 86.4775 207.531 85.4501 207.082 84.5512Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_227" d="M153.146 84.5512C152.697 85.4501 153.339 86.4775 154.302 86.4775H167.914L170.097 76.3325H157.448L153.146 84.5512Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
<path id="Vector_228" d="M165.282 62.7203C164.768 62.7203 164.319 62.9772 164.126 63.4266L159.246 72.8653H170.868L173.051 62.7203H165.282Z" fill="#FF007A" fill-opacity="0.7" stroke="white" stroke-width="1.2"/>
</g>
</g>
</g>
</g>
</g>
</g>
                    <g id="kw_text">
                        <text id="solarKW" text-anchor="middle" x="180" y="116" fill={ThemeMode.colorLiveKwFont} font-size="14"        
                        fontFamily="Arial" visibility={LiveSolar}>10 kW</text>
                            <text id="battKW" text-anchor="middle" x="62" y="318" fill={ThemeMode.colorLiveKwFont} font-size="14"
                            fontFamily="Arial" visibility={LiveBatt}>5 kW</text>
                            <text id="gridKW" text-anchor="middle" x="300" y="316" fill={ThemeMode.colorLiveKwFont} font-size="14"
                            fontFamily="Arial" visibility={LiveGrid}>6 kW</text>
                            <text id="homeKW" text-anchor="middle" x="180" y="246" fill={ThemeMode.colorLiveKwFont} font-size="14"
                            fontFamily="Arial" visibility={LiveHome}>2 kW</text>
                    </g>
                    <defs>
<filter id="filter0_dd" x="240" y="223" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology id="grid_blur" radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
                            <feOffset />
<feGaussianBlur stdDeviation="2.5"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.96 0 0 0 0 0 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0 0 0 0 0.7 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                        </filter>
                        <animate
                            xlinkHref="#grid_blur"
                            attributeName="radius"
                            from="4"
                            to="2"
                            dur="2s"
                            begin="0s" repeatCount="indefinite"
                        />
<filter id="filter1_dd" x="5" y="224" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology id="batt_blur" radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<animate
                            xlinkHref="#batt_blur"
                            attributeName="radius"
                            from="4"
                            to="2"
                            dur="2s"
                            begin="0s" repeatCount="indefinite"
                        />
<filter id="filter2_dd" x="123" y="20" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology id="solar_blur" radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
                        <animate
                            xlinkHref="#solar_blur"
                            attributeName="radius"
                            from="4"
                            to="2"
                            dur="2s"
                            begin="0s" repeatCount="indefinite"
                        />
<filter id="filter3_f" x="4.15744" y="71.5487" width="178.621" height="178.615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter4_f" x="4.77164" y="72.0326" width="177.999" height="177.993" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter5_f" x="7.3858" y="74.5164" width="173.378" height="173.371" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter6_dddii" x="4.46454" y="72.7906" width="178.31" height="179.304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.784314 0 0 0 0 0.666667 0 0 0 0 0.498039 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter7_f" x="6.97164" y="74.2326" width="173.599" height="173.593" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter8_f" x="7.8858" y="75.0164" width="172.378" height="172.371" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter9_f" x="177.978" y="71.5486" width="178.621" height="178.615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter10_f" x="177.985" y="72.0325" width="177.999" height="177.993" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter11_f" x="179.993" y="74.5162" width="173.378" height="173.371" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter12_dddii" x="177.982" y="72.7905" width="178.31" height="179.304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.45098 0 0 0 0 0.254902 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter13_f" x="180.185" y="74.2325" width="173.599" height="173.593" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter14_f" x="180.493" y="75.017" width="172.378" height="172.371" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter15_f" x="75.9257" y="205.51" width="207.647" height="207.647" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter16_f" x="76.2838" y="205.519" width="206.931" height="206.931" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter17_f" x="78.6419" y="207.528" width="202.216" height="202.216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter18_dddii" x="76.1047" y="206.515" width="207.289" height="208.289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.637553 0 0 0 0 0.6875 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter19_f" x="78.4838" y="207.719" width="202.531" height="202.531" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter20_f" x="79.1424" y="208.028" width="201.216" height="201.216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter21_f" x="175.5" y="103" width="9" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter22_f" x="176" y="103" width="8" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter23_f" x="178.5" y="105" width="3" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter24_dddii" x="175.75" y="104" width="8.5" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.67451 0 0 0 0 0.407843 0 0 0 0 0.764706 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter25_f" x="178.2" y="105.2" width="3.6" height="85.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter26_f" x="179" y="105.5" width="2" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter27_f" x="76.2852" y="213.681" width="90.4299" height="53.6373" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter28_f" x="76.5236" y="214.121" width="89.9532" height="52.7582" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter29_f" x="78.7619" y="216.56" width="85.4766" height="47.8791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter30_dddii" x="76.4044" y="214.901" width="90.1916" height="54.1978" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.741176 0 0 0 0 0.541176 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter31_f" x="78.7236" y="216.321" width="85.5532" height="48.3582" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter32_f" x="79.2619" y="217.06" width="84.4766" height="46.8791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter33_f" x="194.254" y="212.697" width="89.4918" height="55.6028" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter34_f" x="194.503" y="213.131" width="88.9946" height="54.7352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter35_f" x="196.751" y="215.564" width="84.4973" height="49.8676" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter36_dddii" x="194.379" y="213.914" width="89.2432" height="56.169" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.478431 0 0 0 0 0.733333 0 0 0 0 0.521569 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter37_f" x="196.703" y="215.331" width="84.5946" height="50.3352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter38_f" x="197.251" y="216.064" width="83.4973" height="48.8676" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter39_f" x="128.5" y="161.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter40_f" x="128.5" y="161.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter41_f" x="131" y="164" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter42_dddii" x="128.25" y="162.25" width="103.5" height="103.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter43_f" x="130.7" y="163.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter44_f" x="131.5" y="164.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter45_f" x="145.5" y="177.5" width="68.1735" height="56.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter46_f" x="145.5" y="177.5" width="68.1735" height="56.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter47_f" x="148.5" y="180.5" width="62.1736" height="50.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter48_dddii" x="145.5" y="178.5" width="68.1735" height="56.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter49_f" x="148.2" y="180.2" width="62.7736" height="50.6001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter50_f" x="148.9" y="180.9" width="61.3736" height="49.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter51_f" x="123" y="156" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter52_f" x="126.5" y="159.5" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter53_f" x="131" y="164" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter54_dddii" x="127.25" y="161.25" width="105.5" height="106.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.819608 0 0 0 0 1 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter55_f" x="130.7" y="163.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter56_f" x="131.5" y="164.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter57_f" x="140.001" y="172" width="79.1732" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter58_f" x="143.5" y="175.5" width="72.1735" height="60.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter59_f" x="148.5" y="180.5" width="62.1736" height="50.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter60_dddii" x="144.5" y="177.5" width="70.1735" height="59.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.819608 0 0 0 0 1 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter61_f" x="148.2" y="180.2" width="62.7736" height="50.6001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter62_f" x="148.9" y="180.9" width="61.3736" height="49.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter63_f" x="245.5" y="228.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter64_f" x="245.5" y="228.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter65_f" x="248" y="231" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter66_dddii" x="245.25" y="229.25" width="103.5" height="103.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter67_f" x="247.7" y="230.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter68_f" x="248.5" y="231.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter69_f" x="265.5" y="241.5" width="63" height="64.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter70_f" x="265.5" y="241.5" width="63" height="64.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter71_f" x="268.5" y="244.5" width="57" height="58.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter72_dddii" x="265.5" y="242.5" width="63" height="64.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter73_f" x="268.2" y="244.2" width="57.6" height="59.3419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter74_f" x="268.9" y="244.9" width="56.2" height="57.9419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter75_dd" x="241" y="224" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter76_f" x="240" y="223" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter77_f" x="243.5" y="226.5" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter78_f" x="248" y="231" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter79_dddii" x="244.25" y="228.25" width="105.5" height="106.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter80_f" x="247.7" y="230.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter81_f" x="248.5" y="231.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter82_f" x="265.5" y="241.5" width="63" height="64.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter83_f" x="263.5" y="239.5" width="67" height="68.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter84_f" x="268.5" y="244.5" width="57" height="58.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter85_dddii" x="264.5" y="241.5" width="65" height="67.7419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter86_f" x="268.2" y="244.2" width="57.6" height="59.3419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter87_f" x="268.9" y="244.9" width="56.2" height="57.9419" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter88_f" x="9.5" y="228.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter89_f" x="9.5" y="228.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter90_f" x="12" y="231" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter91_dddii" x="9.25" y="229.25" width="103.5" height="103.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter92_f" x="11.7" y="230.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter93_f" x="12.5" y="231.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter94_f" x="42.5" y="242.5" width="37.8983" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter95_f" x="42.5" y="242.5" width="37.8983" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter96_f" x="45.5" y="245.5" width="31.8983" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter97_dddii" x="42.5" y="243.5" width="37.8983" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter98_f" x="45.2" y="245.2" width="32.4983" height="58.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter99_f" x="45.9" y="245.9" width="31.0983" height="57.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter100_dd" x="5" y="224" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="2.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter101_f" x="4" y="223" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter102_f" x="7.5" y="226.5" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter103_f" x="12" y="231" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter104_dddii" x="8.25" y="228.25" width="105.5" height="106.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter105_f" x="11.7" y="230.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter106_f" x="12.5" y="231.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter107_f" x="37" y="237" width="48.8983" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter108_f" x="40.5" y="240.5" width="41.8983" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter109_f" x="45.5" y="245.5" width="31.8983" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter110_dddii" x="41.5" y="242.5" width="39.8983" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter111_f" x="45.2" y="245.2" width="32.4983" height="58.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter112_f" x="45.9" y="245.9" width="31.0983" height="57.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter113_f" x="128.5" y="25.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter114_f" x="128.5" y="25.5" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter115_f" x="131" y="28" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter116_dddii" x="128.25" y="26.25" width="103.5" height="103.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter117_f" x="130.7" y="27.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter118_f" x="131.5" y="28.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter119_f" x="148.5" y="33.5" width="63.2285" height="69.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter120_f" x="148.5" y="33.5" width="63.2285" height="69.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter121_f" x="151.5" y="36.5" width="57.2281" height="63.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter122_dddii" x="148.5" y="34.5" width="63.2285" height="69.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter123_f" x="151.2" y="36.2" width="57.8283" height="64.5982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter124_f" x="151.9" y="36.9" width="56.4282" height="63.1982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter125_dd" x="124" y="21" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter126_f" x="123" y="20" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter127_f" x="126.5" y="23.5" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter128_f" x="131" y="28" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter129_dddii" x="127.25" y="25.25" width="105.5" height="106.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter130_f" x="130.7" y="27.7" width="98.6" height="98.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter131_f" x="131.5" y="28.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter132_f" x="142.999" y="28" width="74.2292" height="80.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter133_f" x="146.5" y="31.5" width="67.2285" height="73.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter134_f" x="151.5" y="36.5" width="57.2281" height="63.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter135_dddii" x="147.5" y="33.5" width="65.2285" height="72.9982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect4_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/>
</filter>
<filter id="filter136_f" x="151.2" y="36.2" width="57.8283" height="64.5982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter137_f" x="151.9" y="36.9" width="56.4282" height="63.1982" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="43.5" y1="236" x2="130" y2="77.0374" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="319" y1="238" x2="230" y2="80.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="0.541667" stop-color="#FF9B14"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="73.5" y1="308" x2="280" y2="308" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="0.453125" stop-color="#D9EA00"/>
<stop offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="180.079" y1="106.454" x2="181.018" y2="182.213" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF003D"/>
<stop offset="1" stop-color="#00D1FF"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="87.5" y1="261" x2="142.067" y2="265.507" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#00D1FF"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="280.678" y1="263.299" x2="201.129" y2="268.163" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#00D1FF"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="43.5097" y1="236" x2="130.01" y2="77.0376" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="43.5097" y1="236" x2="130.01" y2="77.0376" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="0.515625" stop-color="#FFE500"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="43.5097" y1="236" x2="130.01" y2="77.0376" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="43.5097" y1="236" x2="130.01" y2="77.0376" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="319.01" y1="238" x2="230.01" y2="80.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#DBD200"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint11_linear" x1="319.01" y1="238" x2="230.01" y2="80.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint12_linear" x1="319.01" y1="238" x2="230.01" y2="80.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint13_linear" x1="319.01" y1="238" x2="230.01" y2="80.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint14_linear" x1="73.4997" y1="307.995" x2="280" y2="307.995" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="0.520833" stop-color="#D9EA00"/>
<stop offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint15_linear" x1="73.4997" y1="307.995" x2="280" y2="307.995" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="0.453125" stop-color="#D9EA00"/>
<stop offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint16_linear" x1="73.4997" y1="307.995" x2="280" y2="307.995" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="0.453125" stop-color="#D9EA00"/>
<stop offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint17_linear" x1="73.4997" y1="307.995" x2="280" y2="307.995" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="0.453125" stop-color="#D9EA00"/>
<stop offset="1" stop-color="#FFF500"/>
</linearGradient>
<linearGradient id="paint18_linear" x1="180.079" y1="106.454" x2="181.018" y2="182.213" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF003D"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint19_linear" x1="180.079" y1="106.454" x2="181.018" y2="182.213" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF003D"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint20_linear" x1="180.079" y1="106.454" x2="181.018" y2="182.213" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF003D"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint21_linear" x1="180.079" y1="106.454" x2="181.018" y2="182.213" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF003D"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint22_linear" x1="87.5002" y1="261" x2="142.068" y2="265.507" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint23_linear" x1="87.5002" y1="261" x2="142.068" y2="265.507" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint24_linear" x1="87.5002" y1="261" x2="142.068" y2="265.507" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint25_linear" x1="87.5002" y1="261" x2="142.068" y2="265.507" gradientUnits="userSpaceOnUse">
<stop stop-color="#05FF00"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint26_linear" x1="280.678" y1="263.297" x2="201.129" y2="268.161" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint27_linear" x1="280.678" y1="263.297" x2="201.129" y2="268.161" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint28_linear" x1="280.678" y1="263.297" x2="201.129" y2="268.161" gradientUnits="userSpaceOnUse">
<stop stop-color="#0085FF"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint29_linear" x1="280.678" y1="263.297" x2="201.129" y2="268.161" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<linearGradient id="paint30_linear" x1="280.678" y1="263.297" x2="201.129" y2="268.161" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="1" stop-color="#0085FF"/>
</linearGradient>
<clipPath id="clip0">
<rect width="360" height="380" fill="white"/>
</clipPath>
</defs>
</svg>
            </div>
            <div class="switchForm1">
                <FormGroup row>
                    <FormControlLabel
                        control={<RedSwitch size="normal" checked={SwitchState.checkedSolarToBatt} onChange={handleChange} name="checkedSolarToBatt" />}
                        label={<span style={{ color: ThemeMode.solarSwitchFont, fontFamily: "Arial" }}>SolarToBatt</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<RedSwitch size="normal" checked={SwitchState.checkedSolarToHome} onChange={handleChange} name="checkedSolarToHome" />}
                        label={<span style={{ color: ThemeMode.solarSwitchFont, fontFamily: "Arial" }}>SolarToHome</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<RedSwitch size="normal" checked={SwitchState.checkedSolarToGrid} onChange={handleChange} name="checkedSolarToGrid" />}
                        label={<span style={{ color: ThemeMode.solarSwitchFont, fontFamily: "Arial" }}>SolarToGrid</span>} labelPlacement="start"
                    />
                </FormGroup>
            </div>
            <div class="switchForm2">
                <FormGroup row>
                    <FormControlLabel
                        control={<GreenSwitch size="normal" checked={SwitchState.checkedBattToHome} onChange={handleChange} name="checkedBattToHome" />}
                        label={<span style={{ color: ThemeMode.battSwitchFont, fontFamily: "Arial" }}>BattToHome</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<YellowSwitch size="normal" checked={SwitchState.checkedGridToHome} onChange={handleChange} name="checkedGridToHome" />}
                        label={<span style={{ color: ThemeMode.gridSwitchFont, fontFamily: "Arial" }}>GridToHome</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<YellowSwitch size="normal" checked={SwitchState.checkedGridToBatt} onChange={handleChange} name="checkedGridToBatt" />}
                        label={<span style={{ color: ThemeMode.gridSwitchFont, fontFamily: "Arial" }}>GridToBatt</span>} labelPlacement="start"
                    />
                </FormGroup>
                </div>
                </div>
        </div>
    )

}



export default AnimationTestPage