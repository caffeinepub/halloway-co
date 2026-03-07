import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  // Custom types
  type Collection = {
    id : Nat;
    name : Text;
    description : Text;
    category : Category;
    itemsCount : Nat;
    isFeatured : Bool;
  };

  module Collection {
    public func compare(collection1 : Collection, collection2 : Collection) : Order.Order {
      Nat.compare(collection1.id, collection2.id);
    };
  };

  type Product = {
    id : Nat;
    name : Text;
    price : Text;
    collectionId : Nat;
    description : Text;
    isAvailable : Bool;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };
  };

  type BrandInfo = {
    tagline : Text;
    story : Text;
    established : Nat;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(sub1 : ContactSubmission, sub2 : ContactSubmission) : Order.Order {
      Int.compare(sub1.timestamp, sub2.timestamp);
    };
  };

  type Category = {
    #old_money;
    #streetwear;
    #collab;
  };

  // Persistent data structures
  let collections = Map.empty<Nat, Collection>();
  let products = Map.empty<Nat, Product>();
  let contactSubmissions = List.empty<ContactSubmission>();

  var brandInfo : ?BrandInfo = null;
  var nextCollectionId = 0;
  var nextProductId = 0;

  // Contact form submissions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray().sort();
  };

  // Collections management
  public shared ({ caller }) func addCollection(name : Text, description : Text, category : Category, itemsCount : Nat, isFeatured : Bool) : async Nat {
    let collection : Collection = {
      id = nextCollectionId;
      name;
      description;
      category;
      itemsCount;
      isFeatured;
    };
    collections.add(nextCollectionId, collection);
    nextCollectionId += 1;
    collection.id;
  };

  public query ({ caller }) func getAllCollections() : async [Collection] {
    collections.values().toArray().sort();
  };

  // Products management
  public shared ({ caller }) func addProduct(name : Text, price : Text, collectionId : Nat, description : Text, isAvailable : Bool) : async Nat {
    let product : Product = {
      id = nextProductId;
      name;
      price;
      collectionId;
      description;
      isAvailable;
    };
    products.add(nextProductId, product);
    nextProductId += 1;
    product.id;
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  // Brand info management
  public shared ({ caller }) func setBrandInfo(tagline : Text, story : Text, established : Nat) : async () {
    brandInfo := ?{
      tagline;
      story;
      established;
    };
  };

  public query ({ caller }) func getBrandInfo() : async BrandInfo {
    switch (brandInfo) {
      case (null) { Runtime.trap("Brand info not set") };
      case (?info) { info };
    };
  };
};
