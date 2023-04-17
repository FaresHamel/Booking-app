import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../constants/images";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "all"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "bd7",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a",
    title: "Second Item"
  }
];

const ScrollableCard = ({ navigation, productsList }) => {
  const renderItemPopular = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Notification")}
      style={{
        height: 250,
        width: 250,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -3, height: 7 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        padding: 10,
        elevation: 20
      }}
    >
      <View style={{ backgroundColor: "white", flex: 2, borderRadius: 10 }}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            shadowColor: "#171717",
            shadowOffset: { width: -3, height: 7 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 20
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "400" }}>Emeral House</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/starImage.png")}
              style={{ width: 20, height: 20, marginRight: 3 }}
            />
            <Text>4.5</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/regionImage30.png")}
            style={{ width: 15, height: 15, marginRight: 3 }}
          />
          <Text>Paris,French</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ marginLeft: 2 }}>$</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              marginRight: 5,
              color: "#5059dc"
            }}
          >
            35
          </Text>
          <Text style={{ color: "#6a737b" }}>/ night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        horizontal={true}
        data={productsList}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemPopular}
        keyExtractor={(item) => `${item.id}`}
        // ListFooterComponent={ItemPopular}
        contentContainerStyle={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      />
    </View>
  );
};

// const ItemPopular = ({ item }) => {

//   const navigation = useNavigation();

//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate("Details")}
//       style={{
//         height: 250,
//         width: 250,
//         backgroundColor: "white",
//         borderRadius: 10,
//         margin: 10,
//         shadowColor: "#171717",
//         shadowOffset: { width: -3, height: 7 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         padding: 10,
//         elevation: 20
//       }}
//     >
//       <View style={{ backgroundColor: "white", flex: 2, borderRadius: 10 }}>
//         <Image
//           source={item.image}
//           style={{
//             width: "100%",
//             height: "100%",
//             borderRadius: 10,
//             shadowColor: "#171717",
//             shadowOffset: { width: -3, height: 7 },
//             shadowOpacity: 0.1,
//             shadowRadius: 3,
//             elevation: 20
//           }}
//           resizeMode="cover"
//         />
//       </View>
//       <View
//         style={{
//           backgroundColor: "white",
//           flex: 1,
//           justifyContent: "space-around"
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             width: "100%",
//             backgroundColor: "white",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: 10
//           }}
//         >
//           <Text style={{ fontSize: 17, fontWeight: "400" }}>Emeral House</Text>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <Image
//               source={require("../assets/starImage.png")}
//               style={{ width: 20, height: 20, marginRight: 3 }}
//             />
//             <Text>4.5</Text>
//           </View>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Image
//             source={require("../assets/regionImage30.png")}
//             style={{ width: 15, height: 15, marginRight: 3 }}
//           />
//           <Text>Paris,French</Text>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "baseline" }}>
//           <Text style={{ marginLeft: 2 }}>$</Text>
//           <Text
//             style={{
//               fontSize: 15,
//               fontWeight: "700",
//               marginRight: 5,
//               color: "#5059dc"
//             }}
//           >
//             35
//           </Text>
//           <Text style={{ color: "#6a737b" }}>/ night</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

//Item featured

const ItemFeatured = ({ props }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details")}
      style={{
        height: 240,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        margin: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -3, height: 7 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        padding: 10,
        elevation: 20,
        alignSelf: "center"
      }}
    >
      <View style={{ backgroundColor: "white", flex: 3, borderRadius: 10 }}>
        <Image
          source={require("../assets/testImage.jpg")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            shadowColor: "#171717",
            shadowOffset: { width: -3, height: 7 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 20
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          justifyContent: "space-around"
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>
            First hotel of fares
          </Text>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text>$</Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                marginRight: 5,
                color: "#5059dc"
              }}
            >
              35
            </Text>
            <Text style={{ color: "#6a737b" }}>/ night</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/regionImage30.png")}
              style={{ width: 15, height: 15, marginRight: 3 }}
            />
            <Text>Paris,French</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const Feed = ({ navigation }) => {
  const productsList = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "product1",
      location: "product1",
      rating: "product1",
      price: "product1",
      image: images.imageHotelOne
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bcd",
      name: "product2",
      location: "product3",
      rating: "product3",
      price: "product3",
      image: images.imageHotelTwo
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bef",
      name: "product4",
      location: "product4",
      rating: "product4",
      price: "product4",
      image: images.imageHotelThree
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bjh",
      name: "product5",
      location: "product5",
      rating: "product5",
      price: "product5",
      images: images.imageHotelFoor
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bme",
      name: "product6",
      location: "product6",
      rating: "product6",
      price: "product6",
      image: images.imageHotelFive
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bmree",
      name: "product7",
      location: "product7",
      rating: "product7",
      price: "product7",
      image: images.imageHotelSixe
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
          maxHeight: 50
        }}
      >
        <Text
          style={{
            fontSize: 40,
            textAlign: "left",
            backgroundColor: "white",
            width: "50%"
          }}
        >
          Discover
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "50%",
            alignItems: "flex-end"
          }}
        >
          <Image
            source={require("../assets/iconsSearch.png")}
            style={{ width: 30, height: 30, backgroundColor: "white" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.listOfChoise}>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </View>

      <ScrollView overScrollMode="true">
        {/* Popular */}
        <View
          style={{
            height: 300,
            backgroundColor: "white",
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "baseline",
              marginTop: 10
            }}
          >
            <View style={{ backgroundColor: "white" }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Pupular</Text>
            </View>
            <View style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <Text style={{ color: "#5059dc" }}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Items Pupular */}
          {/* <FlatList
            nestedScrollEnabled={true}
            horizontal={true}
            data={DataPopular}
            // showsHorizontalScrollIndicator={false}
            renderItem={ItemPopular}
            keyExtractor={(item) => `${item.id}`}
            ListFooterComponent={ItemPopular}
            contentContainerStyle={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          /> */}
          <ScrollableCard navigation={navigation} productsList={productsList} />
        </View>
        {/* Featured Listing*/}
        <View
          style={{
            height: 400,
            backgroundColor: "white",
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "baseline"
            }}
          >
            <View style={{ backgroundColor: "white" }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Featured Listings{" "}
              </Text>
            </View>
            <View style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <Text style={{ color: "#5059dc" }}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Featured Listing */}
          <FlatList
            horizontal={false}
            data={DATA}
            renderItem={({ item }) => <ItemFeatured title={item.title} />}
            keyExtractor={(item) => item.id}
            ListFooterComponent={ItemFeatured}
            contentContainerStyle={{
              backgroundColor: "white",
              alignContent: "center"
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  listOfChoise: {
    height: 100,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "#dee1ec",
    marginHorizontal: 10,
    height: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    color: "black",
    textTransform: "capitalize"
  }
});
export default Feed;
