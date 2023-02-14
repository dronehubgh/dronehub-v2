import { Grid, GridItem, Text } from '@chakra-ui/react';
import { borderCommon, commonPx } from '../../../consts';
import { descHeaderStyles } from './_styles';

export const Description = () => {
  return (
    <Grid
      px={commonPx}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
    >
      <GridItem border={borderCommon} p={10}>
        <Text {...descHeaderStyles}>Overview</Text>
        <Text fontSize={{ lg: '18px', base: '14px' }}>
          Capture exciting moments with the portable and convenient Mavic Mini
          drone that weighs less than 249g. The drone captures beautiful aerial
          imagery with a 12MP camera. Take advantage of this beginner drone to
          capture your perfect shots.
        </Text>
      </GridItem>

      <GridItem border={borderCommon} p={10}>
        <Text {...descHeaderStyles}>Applications</Text>

        <Text fontSize={{ lg: '18px', base: '14px' }}>
          Entry-level drone best for:
          <ul className="ms-4">
            <li>Beginners</li>
            <li>Photographers</li>
            <li>Content creators</li>
            <li>Creatives</li>
            <li>Vloggers</li>
          </ul>
        </Text>
      </GridItem>

      <GridItem border={borderCommon} p={10}>
        <Text {...descHeaderStyles}>Tech Specs | Summary</Text>
        <Text fontSize={{ lg: '18px', base: '14px' }}>
          <b>Aircraft</b>
          <ul className="ms-4">
            <li> 30 minutes maximum flight time</li>
            <li>4 km HD video transmission</li>
            <li>13m/s max speed</li>
            <li>Level 5 wind resistance</li>
            <li>Ultralight and foldable</li>
            <li>Intelligent modes and quickshots</li>
            <li>Ultralight and foldable</li>
          </ul>
          <b>Camera</b>
          <ul className="ms-4 mt-4">
            <li> 12MP camera</li>
            <li>2.7K video</li>
            <li>3-Axis gimbal</li>
            <li>Simplified recording & editing</li>
          </ul>
        </Text>
      </GridItem>

      <GridItem border={borderCommon} p={10}>
        <Text {...descHeaderStyles}>Tech Specs | Extra</Text>

        <Text fontSize={{ lg: '18px', base: '14px' }}>
          <ul className="ms-4">
            <li>Aircraft Takeoff Weight: 249g</li>
            <li>Dimensions Folded: 138 x81x58mm</li>
            <li>Dimensions Unfolded (with Propellers): 245x289x56mm</li>
            <li>Diagonal Distance: 213 mm Operating</li>
            <li>Stabilization: 3-axis (tilt, roll, pan) </li>
            <li>Max Service Ceiling above Sea Level: 3000 m</li>
            <li>Max Wind Speed Resistance: 8.5-10.5 m/s (Scale 5)</li>
            <li>Max Wind Speed Resistance: 8.5-10.5 m/s (Scale 5)</li>
          </ul>
          <div className="mt-4">Download Full Tech Specs</div>
        </Text>
      </GridItem>
    </Grid>
  );
};
