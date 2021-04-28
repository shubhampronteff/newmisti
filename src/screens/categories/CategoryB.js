import React, {Component, Fragment} from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

// import components
import Divider from '../../components/divider/Divider';
import ProductCard from '../../components/cards/ProductCard';

// import colors
import Colors from '../../theme/colors';

// CategoryB Config

// CategoryB Styles
const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: Colors.primaryColor},
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  productList: {
    paddingVertical: 8,
  },
});

export default class CategoryB extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.route.params.value);

    this.state = {
      a: this.props.route.params.value + 1,
      products: [
        {
          imageUri: require('../../assets/img/Dry-fruits/almond.jpg'),
          name: 'Subway sandwich1',
          price: 8.49,
          quantity: 0,
          discountPercentage: 10,
        },
        {
          imageUri: require('../../assets/img/pizza_1.jpg'),
          name: 'Pizza Margarita 35cm',
          price: 10.99,
          quantity: 0,
        },
        {
          imageUri: require('../../assets/img/cake_1.jpg'),
          name: 'Chocolate cake',
          price: 4.99,
          quantity: 0,
        },
        {
          imageUri: require('../../assets/img//sandwich_2.jpg'),
          name: 'Subway sandwich',
          price: 8.49,
          quantity: 0,
          discountPercentage: 10,
        },
        {
          imageUri: require('../../assets/img/pizza_1.jpg'),
          name: 'Pizza Margarita 35cm',
          price: 10.99,
          quantity: 0,
        },
        {
          imageUri: require('../../assets/img/cake_1.jpg'),
          name: 'Chocolate cake',
          price: 4.99,
          quantity: 0,
        },
      ],
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
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
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  renderSeparator = () => <Divider type="inset" marginLeft={0} />;

  componentDidMount() {
    if (this.state.a == 1) {
      this.props.navigation.setOptions({
        title: `Dry Fruits`,
      });
      this.setState({
        products: [
          {
            imageUri: require('../../assets/img/Dry-fruits/almond.jpg'),
            name: 'Almond',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/Dry-fruits/kaju.jpg'),
            name: 'Khaju',
            price: 10.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/Dry-fruits/raisins.jpg'),
            name: 'Raisins',
            price: 4.99,
            quantity: 0,
          },
        ],
      });
    } else if (this.state.a == 2) {
      this.props.navigation.setOptions({
        title: `Pickles`,
      });
      this.setState({
        products: [
          {
            imageUri: require('../../assets/img/pickles/chicken-pickle.jpg'),
            name: 'Chicken',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/pickles/mutton.jpg'),
            name: 'Mutton',
            price: 10.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/pickles/prawn.jpg'),
            name: 'Prawn',
            price: 4.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/pickles/andhra-avakaya.jpg'),
            name: 'Andhra Avakay',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/pickles/maagay.jpg'),
            name: 'Maagay',
            price: 10.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/pickles/allam-pachadi.jpg'),
            name: 'Allam Pachdi',
            price: 4.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/pickles/Bellam-avakay.jpg'),
            name: 'Bellam Avakay',
            price: 4.99,
            quantity: 0,
          },
        ],
      });
    } else if (this.state.a == 3) {
      this.props.navigation.setOptions({
        title: `Powders`,
      });
      this.setState({
        products: [
          {
            imageUri: require('../../assets/img/powder/kandi_podi.jpg'),
            name: 'kandhi Podi',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/powder/karevepakku.jpg'),
            name: 'Karevepaaku Podi',
            price: 10.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/powder/karam.jpg'),
            name: 'Karam Podi',
            price: 4.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/powder/danyala.jpg'),
            name: 'Danyala Podi',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
        ],
      });
    } else if (this.state.a == 4) {
      this.props.navigation.setOptions({
        title: `Sweets`,
      });
      this.setState({
        products: [
          {
            imageUri: require('../../assets/img/sweets/sunnanda.jpg'),
            name: 'Bellam Sunnunda',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/namkeen/jantakulu.jpg'),
            name: 'Nuvvulunda',
            price: 10.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/sweets/Dry-fruit-laddu.jpg'),
            name: 'Dry Fruit Laddu',
            price: 4.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/sweets/bellam-gavvalu.jpg'),
            name: 'Gavvalu',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/sweets/bobbatlu-sweet.jpg'),
            name: 'Bobbattu',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
        ],
      });
    } else if (this.state.a == 5) {
      this.props.navigation.setOptions({
        title: `NamKeen`,
      });
      this.setState({
        products: [
          {
            imageUri: require('../../assets/img/namkeen/jantakulu.jpg'),
            name: 'Jantukulu',
            price: 8.49,
            quantity: 0,
            discountPercentage: 10,
          },
          {
            imageUri: require('../../assets/img/namkeen/appadalu.jpg'),
            name: 'Appadalu',
            price: 10.99,
            quantity: 0,
          },
          {
            imageUri: require('../../assets/img/namkeen/chegodilu.jpg'),
            name: 'Chegodilu',
            price: 4.99,
            quantity: 0,
          },
        ],
      });
    }
  }

  render() {
    const {products} = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <FlatList
            data={products}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderProductItem}
            ItemSeparatorComponent={this.renderSeparator}
            contentContainerStyle={styles.productList}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}
