import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Dimensions } from 'react-native';


// getting width of current window
const width = Dimensions.get("window").width




export default function Cards(props) {


    //keys which are not be included are stored in avoid keys
    const avoidkeys = ["Quick Actions", "Fuel norms", null]

    // height of card
    const [cardwidth, setcardwidth] = useState("20%")

    //margin from top
    const [top, settop] = useState("0%")

    useEffect(() => {
        setcardwidth(props.width)
        settop(props.top)
    }, [])

    const styles = StyleSheet.create({
        card_container: {
            backgroundColor: 'rgba(244, 244, 245, 0)', width: width > 415 ? cardwidth : ("80%"), marginLeft: wp("4%"), marginTop: top, borderRadius: "10px", border: '2px solid black'
        },
        key_container: {
            display: "flex", flexDirection: 'row', width: ('100%'), padding: "2%", justifyContent: "space-around", paddingBottom: "5%"
        },
        key: {
            flex: 1.2, height: "min-content", fontSize: "90%"
        },
        value: {
            flex: 2, marginLeft: ("3%"), marginTop: "0.5%"
        },
        title: {
            textAlign: "center",
            backgroundColor: "#423F3E",
            height: "10%"

        }

    })


    return (
        <View style={styles.card_container}>
            <View style={styles.title}>
                <Text style={{ color: "white" }} >{props.title}</Text>
            </View>
            {/* {rendering details passed on in props by mapping} */}
            {props.details.map((each) => {
                console.log(each.key)
                if (avoidkeys.includes(each.key) === false && each.key !== props.avoid)
                    return (
                        <View style={styles.key_container}>
                            <Text style={styles.key}>{each.key}</Text>
                            <Text style={styles.value}>{each.value}</Text>
                        </View>
                    )
            })}
        </View>
    )
}


