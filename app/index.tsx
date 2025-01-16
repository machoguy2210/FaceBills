import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('10000');
  const [recipient, setRecipient] = useState('MOMO_DAO TAN BINH');
  const [bankAccount, setBankAccount] = useState('99MM24166M81898628');
  const [message, setMessage] = useState('TRAN CONG TUAN ANH chuyen tien');
  const [bank, setBank] = useState('BVBank');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Số tiền"
        placeholderTextColor="#888"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Người nhận"
        placeholderTextColor="#888"
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput
        style={styles.input}
        placeholder="Số tài khoản"
        placeholderTextColor="#888"
        value={bankAccount}
        onChangeText={setBankAccount}
      />
      <TextInput
        style={styles.input}
        placeholder="Nội dung"
        placeholderTextColor="#888"
        value={message}
        onChangeText={setMessage}
      />
      <Picker selectedValue={bank} onValueChange={setBank}>
        <Picker.Item label="BVBank" value="BVBank" />
        <Picker.Item label="VPBank" value="VPBank" />
        <Picker.Item label="ACB" value="ACB" />
        <Picker.Item label="Techcombank" value="Techcombank" />
        <Picker.Item label="Vietcombank" value="Vietcombank" />
        <Picker.Item label="BIDV" value="BIDV" />
        <Picker.Item label="MBBank" value="MBBank" />
        <Picker.Item label="Agribank" value="Agribank" />
        <Picker.Item label="TPBank" value="TPBank" />
        <Picker.Item label="Viettinbank" value="Viettinbank" />
        <Picker.Item label="DongABank" value="DongABank" />
        <Picker.Item label="SCB" value="SCB" />
        <Picker.Item label="MSB" value="MSB" />
      </Picker>
      <Button
        title="Xác nhận"
        onPress={() =>
          navigation.navigate('SuccessfulScreen', {
            amount, recipient, bankAccount, message, bank
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#E4E9F7' // changed
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#7B8DAB', // changed
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#333' // changed
  }
});

export default IndexScreen;
