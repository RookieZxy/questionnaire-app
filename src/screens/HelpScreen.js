import React from 'react'
import { Text, View, StyleSheet} from 'react-native'


const HelpScreen = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>HelpScreen</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: "#161924",
      fontSize: 20,
      fontWeight: "500"
    }
  })


export default HelpScreen;