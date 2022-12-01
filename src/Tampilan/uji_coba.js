<View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.Input1}
          secureTextEntry={Visible}
          placeholder="Enter Your Password"
          placeholderTextColor="#C2CDDB"
        />
        <TouchableOpacity
          onPress={() => {
            setVisible(!Visible);
            setShow(!show);
          }}>
          <Icon
            style={{
              right: 30,
              marginTop: 12,
            }}
            name={show === false ? 'eye' : 'eye-off'}
            color={'#F1F1F1'}
            size={25}
          />
        </TouchableOpacity>
      </View>