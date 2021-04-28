/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  FlatList,
  I18nManager,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

// import components
import Divider from '../../components/divider/Divider';
import {Heading6} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import SimpleProductCard from '../../components/cards/SimpleProductCard';

// import colors
import Colors from '../../theme/colors';

// SearchB Config
const isRTL = I18nManager.isRTL;
const FILTER_ICON = 'filter-variant';

// SearchB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 8,
    fontWeight: '700',
    textAlign: 'left',
  },
  inputContainer: {
    marginHorizontal: 16,
    paddingBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    paddingLeft: 8,
    paddingRight: 51,
    height: 46,
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: isRTL ? 'right' : 'left',
  },
  searchButtonContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor,
    overflow: 'hidden',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
  },
  filtersList: {
    paddingVertical: 8,
    paddingRight: isRTL ? 0 : 16,
    paddingLeft: isRTL ? 16 : 0,
  },
  filterItemContainer: {
    marginRight: isRTL ? 16 : 0,
    marginLeft: isRTL ? 0 : 16,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(35, 47, 52, 0.08)',
    overflow: 'hidden',
  },
  filterItem: {flex: 1, justifyContent: 'center'},
  filterName: {
    top: -1,
    fontWeight: '700',
    color: 'rgb(35, 47, 52)',
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
  },
});

// SearchB
export default class SearchB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [
        {name: 'Special offers', picked: true},
        {name: 'Dry Fruits', picked: false},
        {name: 'Pickles', picked: false},
        {name: 'Powders', picked: false},
        {name: 'Sweets', picked: false},
        {name: 'Namkeen', picked: false},
      ],
      offers: [
        {
          imageUri: require('../../assets/img/pickles/andhra-avakaya.jpg'),
          name: 'Andhra Avakay',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/powder/kandi_podi.jpg'),
          name: 'kandhi Podi',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/sweets/bobbatlu-sweet.jpg'),
          name: 'Bobbattu',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
      dryfruit: [
        {
          imageUri: require('../../assets/img/Dry-fruits/almond.jpg'),
          name: 'Almond',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/Dry-fruits/kaju.jpg'),
          name: 'Khaju',
          price: 10.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/Dry-fruits/raisins.jpg'),
          name: 'Raisins',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
      pickle: [
        {
          imageUri: require('../../assets/img/pickles/chicken-pickle.jpg'),
          name: 'Chicken',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/pickles/mutton.jpg'),
          name: 'Mutton',
          price: 10.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/pickles/prawn.jpg'),
          name: 'Prawn',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/pickles/andhra-avakaya.jpg'),
          name: 'Andhra Avakay',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/pickles/maagay.jpg'),
          name: 'Maagay',
          price: 10.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/pickles/allam-pachadi.jpg'),
          name: 'Allam Pachdi',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/pickles/Bellam-avakay.jpg'),
          name: 'Bellam Avakay',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
      powder: [
        {
          imageUri: require('../../assets/img/powder/kandi_podi.jpg'),
          name: 'kandhi Podi',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/powder/karevepakku.jpg'),
          name: 'Karevepaaku Podi',
          price: 10.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/powder/karam.jpg'),
          name: 'Karam Podi',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/powder/danyala.jpg'),
          name: 'Danyala Podi',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
      sweet: [
        {
          imageUri: require('../../assets/img/sweets/sunnanda.jpg'),
          name: 'Bellam Sunnunda',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/namkeen/jantakulu.jpg'),
          name: 'Nuvvulunda',
          price: 10.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/sweets/Dry-fruit-laddu.jpg'),
          name: 'Dry Fruit Laddu',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/sweets/bellam-gavvalu.jpg'),
          name: 'Gavvalu',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/sweets/bobbatlu-sweet.jpg'),
          name: 'Bobbattu',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
      namkeen: [
        {
          imageUri: require('../../assets/img/namkeen/jantakulu.jpg'),
          name: 'Jantukulu',
          price: 8.49,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/namkeen/appadalu.jpg'),
          name: 'Appadalu',
          price: 10.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          imageUri: require('../../assets/img/namkeen/chegodilu.jpg'),
          name: 'Chegodilu',
          price: 4.99,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
    };
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;

    Keyboard.dismiss();

    navigation.navigate(screen);
  };

  handleFilterPress = (item) => () => {
    const {filters} = this.state;
    const index = filters.indexOf(item);
    const filtersActiveIndex = filters.findIndex((e) => e.picked === true);
    let scrollByIndex;

    if (filtersActiveIndex !== index) {
      filters[filtersActiveIndex].picked = false;
      filters[index].picked = true;

      this.setState(
        {
          filters: [...filters],
        },
        () => {
          this.filtersList.scrollToIndex({animated: true, index: index});

          if (isRTL) {
            scrollByIndex = -(index - filtersActiveIndex);
          } else {
            scrollByIndex = index - filtersActiveIndex;
          }

          this.productSwiper.scrollBy(scrollByIndex, true);
        },
      );
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderFilterItem = ({item, index}) => (
    <View style={styles.filterItemContainer}>
      <TouchableItem
        onPress={this.handleFilterPress(item)}
        style={[
          styles.filterItem,
          item.picked && {backgroundColor: Colors.primaryColor},
        ]}>
        <Text
          style={[
            styles.filterName,
            item.picked && {color: Colors.onPrimaryColor},
          ]}>
          {item.name}
        </Text>
      </TouchableItem>
    </View>
  );

  renderProductItem = ({item, index}) => (
    <SimpleProductCard
      key={index}
      onPress={this.navigateTo('Product')}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      title={item.name}
      price={item.price}
      description={item.description}
    />
  );

  renderSeparator = () => <Divider />;

  onIndexChanged = (index) => {
    const {filters} = this.state;
    const filtersLength = filters.length - 1;
    const filtersActiveIndex = filters.findIndex((e) => e.picked === true);

    if (filtersActiveIndex !== index) {
      console.log(index);
      filters[filtersActiveIndex].picked = false;

      if (isRTL) {
        filters[filtersLength - index].picked = true;
      } else {
        filters[index].picked = true;
      }

      this.setState(
        {
          filters: [...filters],
        },
        () => {
          if (isRTL) {
            this.filtersList.scrollToIndex({
              animated: true,
              index: filtersLength - index,
            });
          } else {
            this.filtersList.scrollToIndex({animated: true, index: index});
          }
        },
      );
    }
  };

  render() {
    const {
      filters,
      offers,
      dryfruit,
      pickle,
      powder,
      sweet,
      namkeen,
    } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Search</Heading6>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Food name or description"
            returnKeyType="search"
            maxLength={50}
            style={styles.textInput}
          />
          <View style={styles.searchButtonContainer}>
            <TouchableItem onPress={this.navigateTo('SearchFilter')}>
              <View style={styles.searchButton}>
                <Icon
                  name={FILTER_ICON}
                  size={23}
                  color={Colors.onPrimaryColor}
                />
              </View>
            </TouchableItem>
          </View>
        </View>

        <View>
          <FlatList
            ref={(r) => (this.filtersList = r)}
            data={filters}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderFilterItem}
            horizontal
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filtersList}
          />
        </View>

        <Swiper
          ref={(r) => (this.productSwiper = r)}
          index={isRTL ? filters.length - 1 : 0}
          onIndexChanged={this.onIndexChanged}
          loop={false}
          showsPagination={false}>
          {/* OFFERS SLIDE */}
          <FlatList
            data={offers}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
          />

          {/* DESSERT SLIDE */}
          <FlatList
            data={dryfruit}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
          />

          {/* GRILL SLIDE */}
          <FlatList
            data={pickle}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
          />

          {/* PASTA SLIDE */}
          <FlatList
            data={powder}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
          />

          {/* PIZZA SLIDE */}
          <FlatList
            data={sweet}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
          />

          {/* SLALD SLIDE */}
          <FlatList
            data={namkeen}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </Swiper>
      </SafeAreaView>
    );
  }
}
