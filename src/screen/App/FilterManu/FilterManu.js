import { View, Text } from 'react-native'
import React from 'react'
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';



const FilterManu = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

  return (
 <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Filter Manu</Button>}>
          <Menu.Item onPress={() => {}} title="Today" />
          <Divider/>
          <Menu.Item onPress={() => {}} title="This month" />
         <Divider/>
          <Menu.Item onPress={() => {}} title="This Year" />
          <Divider/>
        </Menu>
      </View>
    </PaperProvider>
  )
}

export default FilterManu