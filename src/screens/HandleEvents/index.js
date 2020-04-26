import React, { useState } from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { uuid } from 'uuidv4';

const PendingView = () => {
  return (
    <View
      styles={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Esperando ...</Text>    
    </View>
  )
}

function HandleEvents() {
  const [cameraRoll, setCameraRoll] = useState([]);
  const [isModalCameraRollVisible, setIsModalCameraRollVisible] = useState(false);

  takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    
    setCameraRoll([
      ...cameraRoll,
      {
        id: uuid(),
        uri: data.uri,
        selected: false
      }
    ])

    setIsModalCameraRollVisible(!isModalCameraRollVisible);
  }

  handleSelectImage = (id) => {
    const updatedPhotosCameraRoll = cameraRoll.map((item) => {
      if (item.id === id) {
        if (item.selected === true) {
          return(
            {
              ...item,
              selected: false
            }
          )
        } else {
          return(
            {
              ...item,
              selected: true
            }
          )
        }
      } else {
        return (
          {
            ...item
          }
        )
      }
    })

    setCameraRoll(updatedPhotosCameraRoll)
  }

  handleDeletePhotos = () => {
    const filteredCameraRoll = cameraRoll.filter(
      photo => photo.selected !== true
    )

    setCameraRoll(filteredCameraRoll)
  }

  return(
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <PendingView />
          return(
            <View style={styles.subContainer}>
              <TouchableOpacity
                activeOpacity= {0.6}
                underlayColor={'#DDDDDD'}
                onPress={() => takePicture(camera) }
                style={styles.capture}
              >
                <Text style={ styles.text}>
                  Tomar Fotografia
                </Text>
              </TouchableOpacity>
            </View>
          )
        }}
      </RNCamera>

      <Modal
        animationType='slide'
        visible={isModalCameraRollVisible}
        transparent={false}
      >
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'silver',
          }}
        >
          <View>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <View>
                <TouchableOpacity
                  style={{ margin: 5 }}
                  onPress={() => setIsModalCameraRollVisible(!isModalCameraRollVisible)}
                >
                  <Image
                    source={require('../../assets/images/back.png')}
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}
                >Albumes</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >Mi Galeria</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => handleDeletePhotos()}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                Eliminar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <FlatList
            data={cameraRoll}
            renderItem={(image) => {
              return(
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 5
                  }}
                > 
                  <TouchableOpacity
                    onPress={() => handleSelectImage(image.item.id)}
                  >
                    <ImageBackground
                      source={{ uri: image.item.uri }}
                      key={image.index}
                      style={{
                        width: 120,
                        height: 120,
                      }}
                    >
                      {image.item.selected ?
                        <Image
                          source={require("../../assets/images/checkDelete.png")}
                          style={{
                            width: 30,
                            height: 30
                          }}
                        />
                      : null}
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              )
            }}
            numColumns={3}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  subContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  preview:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'navy',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default HandleEvents;
