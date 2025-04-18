
    module.exports = function (app) {
        const modelName = 'membershipplans';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            planName: { type:  String , required: true, minLength: null, maxLength: null },
price: { type: Number, required: false, max: 1000000 },
duration: { type:  String , required: true, maxLength: null },
 },
description: { type:  String , required: true, maxLength: null },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };