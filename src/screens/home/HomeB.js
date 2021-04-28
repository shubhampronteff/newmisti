/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Divider from '../../components/divider/Divider';
import LinkButton from '../../components/buttons/LinkButton';
import ProductCard from '../../components/cards/ProductCard';
import {Heading6} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';

// HomeB Config
const imgHolder = require('../../assets/img/imgholder.png');

// HomeB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleText: {
    fontWeight: '700',
  },
  viewAllText: {
    color: Colors.primaryColor,
  },
  categoriesList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 8,
  },
  categoryContainer: {
    marginLeft: 8,
    width: 112,
    height: 112,
  },
  categoryThumbnail: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
  categoryImg: {
    borderRadius: 8,
  },
  categoryName: {
    position: 'absolute',
    top: 6,
    left: 6,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.84)',
  },
  categoryNameText: {
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.6,
  },
});

// HomeB
export default class HomeB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/img/thumbs/mix-dry.jpg'),
          name: 'Dry Fruits',
        },
        {
          key: 2,
          imageUri: require('../../assets/img/thumbs/mango.jpg'),
          name: 'Pickles',
        },
        {
          key: 3,
          imageUri: require('../../assets/img/thumbs/idli.jpg'),
          name: 'Powders',
        },
        {
          key: 4,
          imageUri: require('../../assets/img/thumbs/sweets.jpg'),
          name: 'Sweets',
        },
        {
          key: 5,
          imageUri: require('../../assets/img/thumbs/namkeen.jpg'),
          name: 'Namkeen',
        },
      ],
      products: [
        {
          imageUri: require('../../assets/img/Dry-fruits/kaju.jpg'),
          name: 'Khaju',
          price: 10.99,
          description:
            'Cashews have less fat than almonds, walnuts, peanuts & pecans. They are power food which has protein, fiber, potassium, magnesium, selenium, iron & zinc',
          quantity: 0,
        },
        {
          imageUri: require('../../assets/img/pickles/chicken-pickle.jpg'),
          name: 'Chicken Pickle',
          price: 8.49,
          description:
            'Chicken Pickle is an exotic tasty mixture of varied spices with chicken pieces. A perfect combo with steamed rice, Chicken Pickle is a very popular and sought after dish.',
          quantity: 0,
        },
        {
          imageUri: require('../../assets/img/sweets/sunnanda.jpg'),
          name: 'Bellam Sunnunda',
          price: 4.99,
          description:
            'A classic Andhra sweet made using urad dal that is usually prepared during the festival sankranthi and most other festivals too.',
          quantity: 0,
        },
        {
          imageUri: require('../../assets/img/namkeen/jantakulu.jpg'),
          name: 'Jantukulu',
          price: 11.99,
          description:
            'Plain greek yogurt, olive oil, garlic, fresh basil, whole peeled tomatoes',
          quantity: 0,
        },
      ],
    };
  }

  navigateTo = (screen, value) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen, {value: value});
  };

  onPressRemove = (item) => () => {
    let {quantity} = item;
    quantity -= 1;

    const {products} = this.state;
    const index = products.indexOf(item);

    if (quantity < 0) {
      return;
    }
    products[index].quantity = quantity;

    this.setState({
      products: [...products],
    });
  };

  onPressAdd = (item) => () => {
    const {quantity} = item;
    const {products} = this.state;

    const index = products.indexOf(item);
    products[index].quantity = quantity + 1;

    this.setState({
      products: [...products],
    });
  };

  keyExtractor = (item, index) => index.toString();

  renderProductItem = ({item, index}) => (
    <ProductCard
      onPress={this.navigateTo('Product')}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      title={item.name}
      price={item.price}
      description={item.description}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  renderSeparator = () => <Divider />;

  render() {
    const {categories, products} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.container}>
          <ScrollView>
            <View style={styles.categoriesContainer}>
              <View style={styles.titleContainer}>
                <Heading6 style={styles.titleText}>Categories</Heading6>
                <LinkButton
                  title="View all"
                  titleStyle={styles.viewAllText}
                  onPress={this.navigateTo('Categories')}
                />
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}>
                {categories.map((category, index) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={category.key}
                    onPress={this.navigateTo('Category', index)}>
                    <View style={styles.categoryContainer}>
                      <ImageBackground
                        defaultSource={imgHolder}
                        source={getImgSource(category.imageUri)}
                        style={styles.categoryThumbnail}
                        imageStyle={styles.categoryImg}>
                        <View style={styles.categoryName}>
                          <Text style={styles.categoryNameText}>
                            {category.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Popular</Heading6>
              <LinkButton
                title="View all"
                titleStyle={styles.viewAllText}
                onPress={this.navigateTo('SearchResults')}
              />
            </View>

            <FlatList
              data={products}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
