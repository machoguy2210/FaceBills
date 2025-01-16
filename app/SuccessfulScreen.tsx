import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Check, ChevronsDown, ChevronDown } from 'lucide-react-native';
import GradientCheckIcon from '@/components/GradientCheckMark';
import CircularButton from '@/components/CircularButton';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons, AntDesign, Feather, Entypo } from '@expo/vector-icons';

const loadFonts = async () => {
  await Font.loadAsync({
    'Averta-SemiBold': require('@/assets/fonts/Averta-Semibold.otf'),
    'FFMarkPro-Thin': require('@/assets/fonts/ff_mark_pro_thin_italic.otf'),
    'CarmenSans-SemiBold': require('@/assets/fonts/carmen-sans-semi-bold.ttf'),
    'Averta-Regular': require('@/assets/fonts/AvertaStd-Regular.otf')
  });
};

const HomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    amount = '100000',
    recipient = 'MOMO_DAO TAN BINH',
    bank = 'BVBank',
    bankAccount = '107873926426',
    message = 'Tra no ne ku'
  } = route.params || {};
  const [bankName, setBankName] = useState('');
  const [bankIcon, setBankIcon] = useState('');
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    let bank_name = '';
    let icon : any;
    switch(bank) {
      case 'BVBank':
        bank_name = 'Ngân hàng TMCP Bản Việt';
        icon = require('@/assets/logo/bvbank.png');
        break;
      case 'VPBank':
        bank_name = 'Ngân hàng TMCP Văn Phong'
        icon = require('@/assets/logo/vpbank.png');
        break;
      case 'ACB':
        bank_name = 'Ngân hàng TMCP Á Châu'
        icon = require('@/assets/logo/acb.png');
        break;
      case 'Techcombank':
        bank_name = 'Ngân hàng TMCP Kỹ Thương VN'
        icon = require('@/assets/logo/techcombank.png');
        break;
      case 'Vietcombank':
        bank_name = 'Ngân hàng TMCP Ngoại Thương VN'
        icon = require('@/assets/logo/vietcombank.png');
        break;
      case 'BIDV':
        bank_name = 'Ngân hàng TMCP Đầu Tư và Phát Triển VN'
        icon = require('@/assets/logo/bidv.png');
        break;
      case 'MBBank':
        bank_name = 'Ngân hàng TMCP Quân Đội'
        icon = require('@/assets/logo/mbbank.png');
        break;
      case 'Agribank':
        bank_name = 'Ngân hàng Nông Nghiệp và Phát Triển Nông Thôn'
        icon = require('@/assets/logo/agribank.png');
        break;
      case 'TPBank':
        bank_name = 'Ngân hàng TMCP Tiên Phong'
        icon = require('@/assets/logo/tpbank.png');
        break;
      case 'Viettinbank':
        bank_name = 'Viettinbank (CTG)'
        icon = require('@/assets/logo/viettinbank.png');
        break;
      case 'DongABank':
        bank_name = 'Ngân hàng TMCP Đông Á'
        icon = require('@/assets/logo/dongabank.png');
        break;
      case 'SCB':
        bank_name = 'Ngân hàng TMCP Sài Gòn'
        icon = require('@/assets/logo/scb.png');
        break;
      case 'MSB':
        bank_name = 'Ngân hàng TMCP Hàng Hải Việt Nam'
        icon = require('@/assets/logo/msb.png');
        break;
      default:
        bank_name = 'Ngân hàng TMCP Bản Việt';
        icon = require('@/assets/logo/bvbank.png');
    }
    setBankName(bank_name);
    setBankIcon(icon);
  }, [bank]);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  return (
    <>
      <ImageBackground
        source={require('@/assets/Background.jpg')}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <GradientCheckIcon />
          <View style={{position: 'absolute', top: 70, right: 28}}>
            <CircularButton>
                <Octicons name="home" size={21} color="#2d35d6" />
            </CircularButton>
          </View>
          
          <Text  style={styles.titleText}>Chuyển tiền thành công</Text>

          <Text style={styles.moneyvalueText}>
            {Number(amount).toLocaleString('en-US')} VND
          </Text>

          <Text style={styles.timevalueText}>{time.slice(0, 5)} - {date}</Text>

          <ChevronsDown color="#090cb7" strokeWidth={1.9} size={20}  />
          
          <View style={styles.infocontainer}>
            <Text style={styles.recipent}>{recipient}</Text>
            <View style={styles.bankInfoContainer}>
              <Image 
                style={styles.bankIcon} 
                source={bankIcon}
                resizeMode='contain'
              />
              <Text style={styles.bankInfoText}>
                  {bank} - {bankName}
              </Text>
            </View>
            <Text style={styles.bankInfoText}>- {bankAccount}</Text>
            <Text style={styles.message}>{message}</Text>
            <View style={styles.arrowContainer}>
            <ChevronDown color="#162739" strokeWidth={2.5} size={18} />
          </View>
          </View>
          <Text style={styles.thanksMessage}>Cảm ơn bạn đã sử dụng dịch vụ của MB Bank</Text>
          <Image style={styles.icon} source={require('@/assets/logo/logo.png')} resizeMode="contain" />
          <View style={styles.iconContainer}>
            <View style={styles.iconbuttonContainer}>
              <CircularButton>
                <AntDesign name='sharealt' size={21} color="#2d35d6" />
              </CircularButton>
              <Text style={styles.iconbuttonText}>Chia sẻ</Text>
            </View>
            <View style={styles.iconbuttonContainer}>
              <CircularButton>
                <Feather name='camera' size={21} color="#2d35d6" />
              </CircularButton>
              <Text style={styles.iconbuttonText}>Lưu ảnh</Text>
            </View>
            <View style={styles.iconbuttonContainer}>
              <CircularButton>
                <Entypo name='text-document' size={21} color="#2d35d6" />
              </CircularButton>
              <Text style={styles.iconbuttonText}>Lưu mẫu</Text>
            </View>
          </View>
        
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Thực hiện giao dịch khác</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  topGradient: {
    flex: 0.73,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    width: '100%',
    paddingTop: 36,
  },
  titleText: {
    fontSize: 22,
    fontFamily: 'Averta-SemiBold',
    color: '#12272c',
    marginBottom: 5,
    marginTop: -28,
    letterSpacing: -0.5,
  },
  moneyvalueText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Averta-SemiBold',
    color: '#0c1cd4',
    marginBottom: 10,
  },
  timevalueText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },
  infocontainer: {
    width: '88%',
    backgroundColor: '#f5f8ff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d2dbf8',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  recipent: {
    fontSize: 19,
    fontFamily: 'Averta-SemiBold',
    fontWeight: 'bold',
    color: '#12272c',
    marginBottom: 5,
  },
  bankInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankIcon: {
    height: 30,
    width: 30,
    marginRight: 8,
  },
  bankInfoText: {
    fontFamily: 'Averta-Regular',
    color: '#12272c',
    textAlign: 'center',
    fontSize: 16,
  },
  message: {
    fontFamily: 'Averta-Regular',
    color: '#12272c',
    fontSize: 16,
    marginTop: 10,
  },
  arrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#d0ddff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
  },
  iconbuttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  iconbuttonText: {
    fontSize: 13,
    fontFamily: 'Averta-SemiBold',
    color: '#12272c',
    marginTop: 5,
  },
  thanksMessage: {
    fontSize: 13,
    fontFamily: 'Averta-Regular',
    letterSpacing: 0.8,
    color: '#666',
    marginTop: 14,
    marginBottom: 15,
  },
  icon: {
    height: 36,
    verticalAlign: 'middle',
    alignSelf: 'center',
  },
  bottomGradient: {
    flex: 0.27,
    margin: 0,
    padding: 0,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#141fd3',
    padding: 16,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 52,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Averta-SemiBold',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  labelText: {
    fontSize: 16,
    color: '#666',
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;