import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientCheckIcon = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 0 }}>
      <Svg width={200} height={200} viewBox="0 0 100 100">
        <Defs>
          {/* Định nghĩa gradient */}
          <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor="#6bf1f8" />
            <Stop offset="70%" stopColor="#66bff1" />
          </LinearGradient>
          <LinearGradient id="shortStrokeGradient" x1="1" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor="#6bf1f8" />
            <Stop offset="70%" stopColor="#66bff1" />
          </LinearGradient>
        </Defs>
        {/* Cạnh dài (Màu cố định)#3261fd */}
        <Path
          d="M36 69 L70 35"
          fill="none"
          stroke="#3261fd" /* Màu cố định */
          strokeWidth={12}
          opacity={0}
          // strokeLinecap="round"
        />
        {/* Cạnh ngắn (Gradient) */}
        <Path
          d="M25 50 L44.2 69.2"
          fill="none"
          stroke="url(#shortStrokeGradient)" 
          strokeWidth={12} /* Tăng strokeWidth để đè lên cạnh dài */
          opacity={0} /* Độ trong suốt */
          // strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default GradientCheckIcon;
