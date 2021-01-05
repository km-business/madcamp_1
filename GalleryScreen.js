import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';

//import FastImage
import FastImage from 'react-native-fast-image';

const imgArr = [
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTgz/MDAxNjA5ODU1NTE2MDMy.9e-r4pR5TMDybT014rRSNq7bcT14aGZ-YENFcV8Ff0Mg.9ggXVnfaN7iy-sGk0EnPW1grcAXG_0BF2OfoKXNScWgg.JPEG.spongebob090/1.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfNTUg/MDAxNjA5ODU1NTE2MDEz.f9TqCr7e9AOInrtiYcoy-UcTsfK65qpBTkLLFRdULvYg.phuFGpug6F84O7tcoBkRNEHz7nf_112XRtHPDhy5uU8g.JPEG.spongebob090/2.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTIg/MDAxNjA5ODU1NTE1OTk1.-Kas-d87R9Uz43n-T1yO8bAFcdNIz9wC8nBhfKQ6FjUg.cjFoig37VE4JB4lBg0Tkb12TNluAaFh7Mx2czcT3-lMg.JPEG.spongebob090/3.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjY5/MDAxNjA5ODU1NTE1OTk2.aU4-KuMgVr3RwQpDrrSQgbe_9urnUflIMRecxT9GZD0g.xbeB9QCGiZy2-SRsTqfITxfl0Z91yz0KWyau0Yb2lMwg.JPEG.spongebob090/4.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfNTUg/MDAxNjA5ODU1NTE1OTk3.ZvKmIxd6-5nnWkymRA71yJc__eAvOhyen_eCAX4gCAog.kysltzJ0PkHE_k4xdvO6Zn0brjmENMz6pRyZn474jvMg.JPEG.spongebob090/5.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTQy/MDAxNjA5ODU1NTE2MDAw.CLvqe1IoIEczNuenhW42PoOuqtyv55Vm1rpyR8TdOeYg.ABHMNz1L-E-Hc5Vn2fha924NRobnZBxwwCPkpryOXfkg.JPEG.spongebob090/6.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMzkg/MDAxNjA5ODU1NTE2MTk5.g9zNroJkamirW5B7H9ksO_sG8Fbx4j7PGx9ZCHRg9dAg.CV8vovXBvyTNvqSrLB31EOUfRdHgePGa4bAPeqVuJecg.JPEG.spongebob090/7.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTMx/MDAxNjA5ODU1NTE2MjEw.tBhfvtWorqQcYR5YrAAasBKRkx83l4EqIgmx_Rk7ufcg.2M1Bcf2mgL43ST4d08lrQG1TrMGEeFsT32FMaIfy5zAg.JPEG.spongebob090/8.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTc4/MDAxNjA5ODU1NTE2MjI1.2cIdp4FZ5GLHM_begL-XTMXspE2YqBpQRsQ2w7T6_uAg.ENSnN5Uu_AnLrwmZJ1MfZY-X5m9pbRF_3QWfnU6Yhj8g.JPEG.spongebob090/9.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjAg/MDAxNjA5ODU1NTE2MjI3.xnz4z1JjPQlBDdvjEdadmzeJSN2xcIQcyzxvVXFcm9Ig.-h8Hsu2TXQV-UGkJqkCOjuxE5QYT3-VL-JqDxLo0RAkg.JPEG.spongebob090/10.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjEx/MDAxNjA5ODU1NTE2MjI4.nnGJ0gu9PmRTLY-FtW3rK3WcWILCbZRbcLBaIJ4fJTwg.EPFcq9KjjMw35NjpBgyf_4FFrp3ega1h7YIWtvxUOQUg.JPEG.spongebob090/11.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjYy/MDAxNjA5ODU1NTE2NDE2.zh0pf26jDBoHbsMG19Xxeh9Z0V7RpLhfl2R6H13epm4g.20rFmY1uO-Ea6qwxC-2ATQUhbQ6Hhs1iljhtFHQFjA4g.JPEG.spongebob090/12.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjcy/MDAxNjA5ODU1NTE2NDM2.oHVpXGN5pBy4t1mWBLefBbcxkbX935hJpw6L6hKx13Ug.-oApKf00-HA3C5s0FCTagufiHZG9m69grRv4gTdPEAsg.JPEG.spongebob090/13.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjIz/MDAxNjA5ODU1NTE2NDM2.aQKx9dp_sNnlxzJNCw3TANr4ey3sBB0_Zw4LKPpPG3Mg.QLHn-S_pXISgYISXqDo5lfqlKW6aiHpS7k_OAgafy-Qg.JPEG.spongebob090/14.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjg0/MDAxNjA5ODU1NTE2NDU5.MNJfHL5FP3U3nu21jov57MSocFgZ9SFSXrp4Fona1Dog.Vb9rro5-trif2XR9F3YFdSvbguSrUKGCagNSwepsT2Yg.JPEG.spongebob090/15.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMjgw/MDAxNjA5ODU1NTE2NDYx.Py0HB43bQ7aAXi38zSEzXmF78S-QwP5zzDDMCfyut3kg.jElLki8rcWRP6CSYMCfK9sIv_UR9nF493W35e9ax40gg.JPEG.spongebob090/16.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTAz/MDAxNjA5ODU1NTE2NjY2.2JMfMHBfKcDdF-1br7zpABbrSStk38gSqaUeAViek4Ag.hbJTW4qrEvmxesN-goN47HMy3KmoAuTohmWQWcFsrwYg.JPEG.spongebob090/17.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTYx/MDAxNjA5ODU1NTE2NjY2.jqSUjoMPwTcPXtYZRPBWJbmoIN3bXOn9O06RLwQEVdUg.bIraUUTrPOBEwnEf3RvDBG3MrZmUj03PdxwCFd3Mkj0g.JPEG.spongebob090/18.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTI3/MDAxNjA5ODU1NTE2Njcy.n0AONj7qR7NvDlIm-7XEh-QydYSauIBUBaiW5BzvgLAg.IFRVa17RV9AMz59zo2UyGiylzCmFtun_YBlkpjACYjgg.JPEG.spongebob090/19.jpg?type=w966',
 'https://postfiles.pstatic.net/MjAyMTAxMDVfMTQw/MDAxNjA5ODU1NTE2Njc5.1QKV14McidTaGTOTP2tX-2U6lwN_ACGe1QJh7gfX8kcg.GfRiYDUVfS8ubJihY4cezcAVSP7rq_t0hEOuhre6GbEg.JPEG.spongebob090/20.jpg?type=w966',
 ]

const GalleryScreen = () => {
  const [imageuri, setImageuri] = useState('');
  const [
    modalVisibleStatus, setModalVisibleStatus
  ] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(20)).map((v, i) => {
      return {
        id: i,
        src: imgArr[i]
      };
    });
    setDataSource(items);
  }, []);

  const showModalFunction = (visible, imageURL) => {
    //handler to handle the click on image of Grid
    //and close button on modal
    setImageuri(imageURL);
    setModalVisibleStatus(visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisibleStatus ? (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{uri: imageuri}}
              resizeMode={
                FastImage.resizeMode.contain
              }
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, '');
              }}>
              <FastImage
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{flex: 1}}
                  onPress={() => {
                    showModalFunction(true, item.src);
                  }}>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: item.src,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});






