import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import React, { useCallback, useRef, useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function Page() {
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const buttomSheetModalRef = useRef(null);


  const snapPoints = ["25%", "48%", "25%"]

  const handleChangeVaule1 = useCallback(() => {
    setValue1(!value1);
  },[value1]);

  const handleChangeVaule = useCallback(() => {
    setValue(!value);
  },[value]);

  const handleModal = () => {
    buttomSheetModalRef.current.present();
  }
  const handleCloseModal = () => {

    buttomSheetModalRef.current.dismiss();

  };
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: value ? "black" : "gray" }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View style={styles.main}>
            <Button title="Modal" onPress={handleModal} />
          </View>
          <BottomSheetModal
            ref={buttomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 20, backgroundColor:value1 ? "gray" : "white", color:value1 ? "white" : "black" }}
          >
            <View style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>


              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: "black", fontSize: 20 }}>
                  Change backgroundColor
                </Text>
                <View>
                  <Switch value={value} onChange={handleChangeVaule} />
                </View>

              </View>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: "black", fontSize: 20 }}>
                  Change Modal  backgroundColor
                </Text>
                <View>
                  <Switch value={value1} onChange={handleChangeVaule1} />
                </View>

              </View>

              

              <View>

                <Button title="Close" onPress={handleCloseModal} />

              </View>
            </View>

          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});




