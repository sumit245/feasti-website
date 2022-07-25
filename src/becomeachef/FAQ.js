import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

function FAQ() {
  return (
    <div className="container my-4">
      <div className="row mx-4 my-4">
        <h4 className="text-center my-4 text-black">
          Frequently asked questions
        </h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Feasti?</Accordion.Header>
            <Accordion.Body>
              Feasti is a community-based platform that enables cooks to sell
              homemade food to their neighbors. We connect local home-based
              cooks with nearby hungry customers who can browse unique menus and
              order fresh and healthy homemade food. All of our HomeCooks are
              carefully vetted and must undergo a multi-step onboarding process
              in order to be approved onto the platform. If you're interested in
              learning more about how you can feed your community, please
              contact us at chef@feasti.com.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does delivery works?</Accordion.Header>
            <Accordion.Body>
              Delivery varies in each market based on local requirements, but
              we'll help you identify the best delivery method available to you.
              We're here for you every step of the way!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I receive an order from Feasti?
            </Accordion.Header>
            <Accordion.Body>
              Customers may view meal plans on your menu for subscription. The
              Feasti app allows customers to select meal plan, subscription
              start date, delivery time slot along with any special requests.
              Once the customer has paid for the order, you’ll confirm the order
              by accepting and notify them of the subscription dates, time and
              location desired. For easy communications, you can chat directly
              with the customer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Once I start selling on Feasti, can I take a break from selling?
            </Accordion.Header>
            <Accordion.Body>
              Yes, of course! You manage your own schedule. If you'd like to
              take a break, that's completely fine. You can set your profile to
              offline mode from your chef app and not going to be visible to
              customers until you put it back to online mode. We'll be here to
              support you whenever you're ready to come back!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How can I signup as a HomeCook on Feasti?
            </Accordion.Header>
            <Accordion.Body>
              Just fill out the interest form on our website or chef app and one
              of our representative will be in touched with you within 24hrs for
              next step towards become a Feasti member.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How do I get paid?</Accordion.Header>
            <Accordion.Body>
              We make getting paid super easy. You will be get paid bi-weekly of
              any orders you receive within pay cycle period. We transfer the
              funds directly into your account instantly in next 2 days after
              current pay period ends. It's that simple. In addition, you can
              log into your Chefs app Portal at any time to review your orders,
              transactions, and payouts or setup real-time notifications.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>What are the fees?</Accordion.Header>
            <Accordion.Body>
              We understand that we’re only as successful as our Home Cooks,
              which is why it’s our mission to make sure that we provide you
              with tools and resources you need to succeed. We charge the chefs
              a small convenience fee of 10% on each order to cover costs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className='text-center my-4'>
          <h6 className="text-uppercase">Still have any query?</h6>
          <h5 className='text-dark fw-bold'> Feel free to contact our support team at</h5>
          <h4 className="btn btn-danger text-white">support@feasti.com</h4>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
