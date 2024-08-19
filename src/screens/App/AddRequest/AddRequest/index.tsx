import React, {useRef, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import {
  AppButton,
  AppHeader,
  AppInput,
  MainWrapper,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  addRequestForm,
  addRequestSchema,
} from '../../../../shared/utils/validations';
import styles from './styles';
import {GLColors, WP, isIOS} from '../../../../shared/exporter';

interface AddRequestProps {
  navigation: any;
}

interface Option {
  id: number;
  label: string;
}

const options: Option[] = [
  {id: 1, label: 'Morning'},
  {id: 2, label: 'Afternoon'},
  {id: 3, label: 'Evening'},
];

const AddRequest = ({navigation}: AddRequestProps) => {
  const formikRef = useRef(null);
  const [playersCount, setPlayersCount] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCheckBoxChange = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleAddRequest = (values: any) => {
    console.log('Values => ', values);
    if (playersCount <= 0) {
      alert('Please select number of players');
    }
    if (!selectedId) {
      alert('Please select time');
    }
  };

  const increment = () => setPlayersCount(playersCount + 1);

  const decrement = () =>
    setPlayersCount(playersCount > 0 ? playersCount - 1 : 0);

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title="Game Request" leftIcon={false} />
      <View style={styles.spacerView} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <Formik
          innerRef={formikRef}
          initialValues={addRequestForm}
          validationSchema={addRequestSchema}
          onSubmit={(values: any) => handleAddRequest(values)}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.headingTextStyle}>Location*</Text>
                <AppInput
                  placeholder="Enter Location"
                  value={values.location}
                  touched={touched.location}
                  autoCapitalize="none"
                  inputStyle={styles.inputStyle}
                  errorMessage={errors.location}
                  onChangeText={handleChange('location')}
                />
                <Text style={[styles.headingTextStyle, {marginTop: WP('6')}]}>
                  Number of players *
                </Text>
                <View style={styles.countContainer}>
                  <TouchableOpacity
                    onPress={decrement}
                    style={styles.countButtonStyle}>
                    <Text style={styles.countButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.countTextStyle}>{playersCount}</Text>
                  <TouchableOpacity
                    onPress={increment}
                    style={styles.countButtonStyle}>
                    <Text style={styles.countButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.headingTextStyle}>Time *</Text>
                <View style={styles.checkboxContainer}>
                  {options.map(option => (
                    <View key={option.id} style={styles.checkboxContainer}>
                      <CheckBox
                        boxType="square"
                        value={selectedId === option.id}
                        style={styles.checkboxStyle}
                        onValueChange={() => handleCheckBoxChange(option.id)}
                        tintColor={
                          selectedId === option.id
                            ? GLColors.Blue.B2
                            : GLColors.Natural.N4
                        }
                        tintColors={{
                          true: GLColors.Blue.B2,
                          false: GLColors.Natural.N4,
                        }}
                      />
                      <Text style={styles.labelStyle}>{option.label}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.bottomView}>
                  <AppButton
                    title={'Submit Request'}
                    handleClick={handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </MainWrapper>
  );
};

export default AddRequest;
