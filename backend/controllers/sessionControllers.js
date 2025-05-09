const Session=require('../Models/session');
const Question=require('../Models/Question')

exports.createSession = async (req, res) => {
    try {
      const { role, experiences, topicsToFocus, description, questions } = req.body;
      const userId = req.user._id;
  
      // Validate request body
      if (!role || !experiences || !topicsToFocus || !description || !questions || questions.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields or empty questions array'
        });
      }
  
      // Create session
      const session = await Session.create({
        user: userId,
        role,
        experiences,
        topicsToFocus,
        description,
        questions: [] // Initialize questions as empty array
      });
  
      // Create associated questions
      const questionDocs = await Promise.all(
        questions.map(async (q) => {
          const question = await Question.create({
            session: session._id,
            question: q.question,
            answer: q.answer // Corrected spelling
          });
          return question._id;
        })
      );
  
      // Attach questions to session
      session.questions = questionDocs;
      await session.save();
  
      res.status(201).json({
        success: true,
        session
      });
    } catch (error) {
      console.log('Session creation error:', error);
      return res.status(400).json({
        success: false,
        message: 'Session can\'t be created'
      });
    }
  };
  