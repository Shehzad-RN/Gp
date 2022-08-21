import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RefundPolicy = () => {
    return (
        <ScrollView style={styles.main}>
            <Text style={styles.title}>Refund</Text>
            <View>
                <Text style={styles.question}>When can I expect a refund for my returned item?</Text>
                <Text style={styles.answer}>
                    Once we receive the original item, we will do a quality check within 2 days and initiate a refund. {'\n'} {'\n'}
                    - For prepaid orders, it will be initiated immediately to card/bank account. Your bank will take a maximum of 7 to 10 business days to credit this amount. {'\n'}{'\n'}
                    - For cash on delivery orders, it will be credited to your bank account through an NEFT transfer within 2 hours. {'\n'}{'\n'}
                    We will also keep you updated on email and SMS.{'\n'}{'\n'}
                </Text>
            </View>
            <View>
                <Text style={styles.question}>What are the different modes of refund available?</Text>
                <Text style={styles.answer}>
                    Refunds are made to the original modes of payment for: {'\n'}{'\n'}
                    ●	Credit cards {'\n'}
                    ●	Debit cards {'\n'}
                    ●	Netbanking {'\n'}
                    ●	Wallets {'\n'} {'\n'}
                    For cash on delivery, a refund will be to your bank account. {'\n'}{'\n'}
                </Text>
            </View>
            <View>
                <Text style={styles.question}>When can I expect a refund for my canceled order?</Text>
                <Text style={styles.answer}>
                    If you cancel the order before shipment, we would start the refund almost immediately. In case you cancel the order after shipment, it might take up to 6 days to initiate the refund.  {'\n'} {'\n'}
                    Bank takes an additional 7 to 10 business days to credit the amount. We will also keep you updated on email and SMS. {'\n'}
                </Text>
            </View>
            <View>
                <Text style={styles.question}>What are the details I must provide for a bank NEFT transfer?</Text>
                <Text style={styles.answer}>
                    You need to provide the following details: {'\n'}{'\n'}
                    ●	Bank account number {'\n'}
                    ●	Account holder's name {'\n'}
                    ●	IFSC code (mentioned on your bank cheques) {'\n'}
                </Text>
            </View>
            <View>
                <Text style={styles.question}>How can I submit my bank's NEFT details if the link in the email does not work?</Text>
                <Text style={styles.answer}>Don't worry! Write to us with your complete bank NEFT details in 'CONTACT CUSTOMER CARE'.</Text>
            </View>
            <View>
                <Text style={styles.question}>I have not received the reimbursement of my courier charges. What do I do?</Text>
                <Text style={styles.answer}>You need to upload your airway bill/courier receipt at 'CONTACT CUSTOMER CARE'. We will reimburse the charges to your bank account via NEFT transfer.</Text>
            </View>
            <Text style={styles.title}>Refund</Text>
            <View>
                <Text style={styles.question}>I have not received the reimbursement for my repair charges. What do I do?</Text>
                <Text style={styles.answer}>Please upload the repair charges slip at 'CONTACT CUSTOMER CARE'. We will reimburse the charges to your bank account via NEFT transfer.</Text>
            </View>
            <View style={{height: 50}}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15
    },
    question: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 2
    },
    answer: {
        fontSize: 12,
        fontWeight: '400',
    }
})

export default RefundPolicy;
