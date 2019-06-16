import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image, url } = props.album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnailStyle}
          />
        </View>

        <View style={styles.headerDetailStyle}>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onClick={() => Linking.openURL(url)} buttonText={'BUY NOW!'} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerDetailStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleText: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItem: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    //aspectRatio: 1,
    width: null,

  }
};

export default AlbumDetail;
