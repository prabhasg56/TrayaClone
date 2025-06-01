import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const journeySteps = [
    {
        id: 1,
        icon: 'food-fork-drink', // digestion
        title: 'Month 1-2',
        description:
            'Addressing digestion issues which is an internal trigger for hair loss',
    },
    {
        id: 2,
        icon: 'hair-dryer', // follicular health
        title: 'Month 3-4',
        description:
            'Visible reduction in hair fall and improved follicular health',
    },
    {
        id: 3,
        icon: 'sprout', // baby hair
        title: 'Month 5',
        description: 'Onset of new baby hair growth',
    },
];

const GrowthJourneyCard = () => (
    <View style={styles.container}>
        <Text style={styles.heading}>Your Hair Growth Journey</Text>

        <Card mode="outlined" style={styles.card}>
            <Card.Content>
                {/* vertical line */}
                <View style={styles.line} />

                {journeySteps.map((step, idx) => (
                    <View key={step.id} style={styles.stepRow}>
                        {/* bullet */}
                        <View style={styles.bulletWrapper}>
                            <View style={styles.bullet}>
                                <Icon name={step.icon} size={16} color="#fff" />
                            </View>
                        </View>

                        {/* text */}
                        <View style={styles.textCol}>
                            <Text style={styles.stepTitle}>{step.title}</Text>
                            <Text style={styles.stepDesc}>{step.description}</Text>
                        </View>
                    </View>
                ))}
            </Card.Content>
        </Card>
    </View>
);

const bulletSize = 28;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    heading: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 32,
        marginBottom: 12,
    },
    card: {
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor:'#fff'
    },
    line: {
        position: 'absolute',
        left: bulletSize / 2,
        top: bulletSize / 2,
        bottom: 0,
        width: 2,
        backgroundColor: '#d1d5db',
    },
    stepRow: {
        flexDirection: 'row',
        paddingBottom: 24,
        paddingTop: 4,
    },
    bulletWrapper: {
        width: bulletSize + 8, // extra space for alignment
        alignItems: 'center',
    },
    bullet: {
        width: bulletSize,
        height: bulletSize,
        borderRadius: bulletSize / 2,
        backgroundColor: '#B8D700',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    textCol: { flex: 1 },
    stepTitle: { fontSize: 16, fontWeight: '600', color: '#6a8d00' },
    stepDesc: { fontSize: 13, color: '#374151', marginTop: 2 },
});

export default GrowthJourneyCard;
